import 'bootstrap/dist/css/bootstrap.css';
import "./LogIn.css";
import { useEffect, useState } from 'react';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleLogIn(event){
    event.preventDefault();
    localStorage.setItem(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="col-lg-12">
      <div className="login-form-wrapper">
        <h1>Login</h1>
        <div className="form-style-1">
          <form id="login-form" action="/account/login" method="post" onSubmit={handleLogIn}>
            <input
              type="hidden"
              name="_csrf"
              value="zAWLlYphh0OnmoX4q9dVAC8RXtThEsHisyShawVC75CbMvzQzSbLAsmotZGf4SJCRXpti6VE9JXGe_I-Nwm95A=="
            />{" "}
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group field-loginform-email required">
                  <label className="control-label" htmlFor="loginform-email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="loginform-email"
                    className="form-control"
                    name="LoginForm[email]"
                    aria-required="true"
                    onChange={(event)=>setEmail(event.target.value)}
                  />

                  <div className="help-block"></div>
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group field-loginform-password required">
                  <label className="control-label" htmlFor="loginform-password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginform-password"
                    className="form-control"
                    name="LoginForm[password]"
                    aria-required="true"
                    onChange={(event)=>setPassword(event.target.value)}
                  />

                  <div className="help-block"></div>
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group field-loginform-rememberme">
                  <input type="hidden" name="LoginForm[rememberMe]" value="0" />
                  <label>
                    <input
                      type="checkbox"
                      id="loginform-rememberme"
                      name="LoginForm[rememberMe]"
                      value="1"
                    />{" "}
                    Remember Me
                  </label>

                  <div className="help-block"></div>
                </div>{" "}
              </div>
              <div className="col-md-6 col-sm-12">
                <div style={{color:'#999', margin:'1em 0', textAlign: 'right'}}>
                  <a href="/account/request-password-reset">
                    Forgot your password?
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    type="submit"
                    className="redBtnSquare"
                    name="login-button"
                  >
                    Login
                  </button>{" "}
                </div>
              </div>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
