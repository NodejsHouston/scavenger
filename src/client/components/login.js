
import React from "react";
import ReactDOM from "react-dom";

export default class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log('hi');
  }
  onForgot(e) {
    e.preventDefault();
    console.log('hi, forgetful!');
  }
  onChange(e){
    console.log("We will remember you!");
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.onSubmit(e) }>
          <input placeholder="username"/>
          <input placeholder="password"/>
          <button type="submit">Login</button>
        </form>
        <input type="checkbox" onChange={(e)=> this.onChange(e)}/>Remember Me
        <button onClick={(e) => this.onForgot(e)}>Forgot Your Password?</button>

      </div>
    );
  }
}
