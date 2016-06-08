
import React from "react";
import ReactDOM from "react-dom";

export default class SignUp extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		console.log("signup button");
	}

	handleForgotPassword(e){
		e.preventDefault();
		console.log("forget password?");
	}
	handleRememberMe(e){
		
		console.log("remember me");
	}

  render() {
    return (
      <div>
        <h1>Sign Up!</h1>

        <div className="sign-up-Container">
        	<form className="sign-up-Form" onSubmit={ (e) => this.handleSubmit(e) }>
        		<input className="username" type="text" placeholder="enter username"></input>
        		<input className="email" type="text" placeholder="enter email"></input>
        		<input className="password" type="text" placeholder="enter password"></input>
        		<input className="signUp-submit" type="submit" value="Submit"></input>
        	</form>
        	<button className="forget-password" type="button" onClick={ (e) => this.handleForgotPassword(e) } >Forgot Password?</button>
        	Remember Me<input className="remember-me" type="checkbox" onClick={ (e) => this.handleRememberMe(e) }></input>
        </div>


      </div>
    );
  }
}
