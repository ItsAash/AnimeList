import React from "react";
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
            <button className="register__button button__style1">
              Register Now
            </button>
            <button className="learnmore__button button__style1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
