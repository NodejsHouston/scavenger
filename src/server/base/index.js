import Bcrypt from "bcrypt";

const email = require('../include/email')();

const validate = function (request, username, password, callback) {
    const user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, (err, isValid) => {
        callback(err, isValid, { id: user.id, name: user.name });
    });
};

const users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

const register = (server, options, next) => {

  server.auth.strategy('simple', 'basic', { validateFunc: validate });

  server.route({
    method: 'GET',
    path: '/assets/{path*}',
    config: {
      handler: {
        directory: { path: './dist/client' }
      }
    }
  });

  server.route({
    method: 'POST',
    path: '/forgotPassword',
    config: {
      handler: (request, reply) => {
        // TODO: generate temporary password or token for web endpoint
        // TODO: lookup email and make sure it exists
        var message = {
          to: request.payload.email,
          subject: 'forgot password?',
          text: 'You seem to have forgotten your password... that\'s too bad.',
        };
        email.sendMail(message);
        reply('email sent');
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    config: {
      handler: (request, reply) => {

        const layout = `
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
              <link rel='shortcut icon' type='image/x-icon' href='/assets/images/favicon.ico' />
              <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css" crossorigin="anonymous">
              <title>
                Code Node - Node.js Houston
              </title>
            </head>
            <body>
              <div id="app"></div>
              <script src="/assets/bundle.js" async></script>
            </body>
          </html>
        `;

        return reply(layout);

      }
    }
  });

  server.route({
    method: 'GET',
    path: '/login',
    config: {
      auth: 'simple',
      handler: function (request, reply) {
        reply('hello, ' + request.auth.credentials.name);
      }
    }
  });

  return next();
};

register.attributes = {
  name: 'base'
};

export default register;
