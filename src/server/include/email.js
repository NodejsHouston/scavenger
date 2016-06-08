var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
    auth: {
        api_key: 'key-c1eecf404c85c1da8d413758b1bfe97f',
        domain: 'sandbox64a150b27ae94ab9bc81f8e0a99a7120.mailgun.org'
    }
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

/**
 * message: {
 *   to,
 *   subject,
 *   html,
 *   text,
 * }
 */
var sendMail = message => {
  return nodemailerMailgun.sendMail({
      from: 'nodejshoustonscavenger@gmail.com',
      to: message.to,
      subject: message.subject,
      // html: message.html,
      text: message.text,
  }, function(err, info) {
      if (err) {
          console.log('Error: ' + err);
      } else {
          console.log('Response: ' + info);
      }
  });
};

module.exports = () => {
  return {
    sendMail,
  };
};
