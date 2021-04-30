import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

import Header from "../../components/header";
import Loading from "../../components/loading";

import AvatarImage from "../../assests/avatar.svg";
import BannerImage from "../../assests/2fa_undraw2.svg";

export default function LoginPage() {
  let bannerLoaded = useRef(false);
  let avatarLoaded = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bannerLoaded && avatarLoaded) setLoading(false);
  }, [bannerLoaded, avatarLoaded]);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <div className="main_container">
        <div className="main">
          <div className="left_container">
            <img onLoad={() => (bannerLoaded = true)} src={BannerImage} />
          </div>
          <div className="right_container">
            <form className="login_form">
              <div className="login_avatar">
                <center>
                  <img
                    onLoad={() => (avatarLoaded = true)}
                    className="avatar"
                    src={AvatarImage}
                    alt="avatar"
                  />
                </center>
              </div>
              <div className="login_container">
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
              </div>
              <div className="signin_button">
                <button id="signin_button">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
