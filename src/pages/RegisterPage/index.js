import React from "react";

import Header from "../../components/header";

import AvatarImage from "../../assests/avatar.svg";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="main_container">
        <div className="main register__main">
          <div className="right_container register__container">
            <form className="login_form register_form">
              <div className="login_avatar">
                <center>
                  <img
                    className="avatar"
                    onLoad={console.log("hello")}
                    src={AvatarImage}
                    alt="avatar"
                  />
                </center>
              </div>
              <div className="login_container">
                <div className="field">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="joebiden@joe.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <input id="username" type="text" placeholder="Joe Biden" />
                </div>
                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input id="password" type="text" placeholder="1234" />
                </div>
                <div className="field">
                  <label htmlFor="con_password" className="label">
                    Confirm Password
                  </label>
                  <input id="con_password" type="password" placeholder="1234" />
                </div>
              </div>
              <div className="signin_button">
                <button id="signin_button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
