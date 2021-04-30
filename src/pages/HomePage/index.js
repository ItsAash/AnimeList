import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import bottomWave from "../../assests/bottomWave.svg";
import topWave from "../../assests/topWave.svg";

import Header from "../../components/header";

function HomePage() {
  return (
    <div className="homepage">
      <img className="homepage__buttonWave" src={bottomWave} alt="wave"></img>
      <img className="homepage__topWave" src={topWave} alt="wave"></img>

      <Header />
      <Screen />
    </div>
  );
}

function Screen() {
  return (
    <div className="screen">
      <div className="screen__container">
        <div className="text__container">
          <div className="big__text">Track Your Anime</div>
          <div className="small__text">
            Make your own anime, manga list. News about anime and manga. Learn
            more about anime
          </div>
        </div>
        <div className="link__container">
          <Link to="/register">
            <button className="register__button button__style1">
              Register Now
            </button>
          </Link>
          <button className="learnmore__button button__style1">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
