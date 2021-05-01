/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
import "./style.scss";

import Spinner from "react-bootstrap/Spinner";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [navOn, setNavOn] = useState(false);

  const history = useHistory();

  const handleBurgerClick = () => {
    // eslint-disable-next-line no-unused-vars
    const upperBun = document.querySelector(".upper__bun");
    // eslint-disable-next-line no-unused-vars
    const lowerBun = document.querySelector(".lower__bun");

    upperBun.classList.toggle("rotate-pos");
    lowerBun.classList.toggle("rotate-neg");

    if (!navOn) setNavOn(true);
    if (navOn) setNavOn(false);
  };

  const handleAnimeClick = async () => {
    try {
      setLoading(true);
      const upcomingResponse = await axios({
        method: "GET",
        // eslint-disable-next-line no-undef
        url: `${process.env.REACT_APP_API_URL}/anime/top`,
        params: {
          page: 1,
          subtype: "upcoming",
        },
      });

      const airingRespsonse = await axios({
        method: "GET",
        // eslint-disable-next-line no-undef
        url: `${process.env.REACT_APP_API_URL}/anime/top`,
        params: {
          page: 1,
          subtype: "airing",
        },
      });

      history.push({
        pathname: "/anime",
        state: {
          top_upcoming: upcomingResponse.data,
          top_airing: airingRespsonse.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading && (
        <Spinner
          animation="border"
          className="spinner"
          size="sm"
          variant="light"
        />
      )}
      <header>
        <div className="homepage__main">
          <Link to="/">
            <div className="logo">AnimeList</div>
          </Link>
          <nav>
            <a onClick={handleAnimeClick} className="nav__element">
              Anime
            </a>
            <a className="nav__element">Manga</a>
            <a className="nav__element">About</a>
            <a className="nav__element">Help</a>
          </nav>

          <Link to="/login">
            <button className="login__button">Login</button>
          </Link>
          <div className="hamburger" onClick={handleBurgerClick}>
            <div className="upper__bun bun"></div>
            <div className="lower__bun bun"></div>
          </div>
        </div>
      </header>
      <CSSTransition
        in={navOn}
        timeout={300}
        classNames="mbl_menu"
        unmountOnExit
      >
        <div className="mobile__menu">
          <nav className="mobile__nav">
            <a onClick={handleAnimeClick} href="#" className="nav__element">
              Anime
            </a>
            <a href="#" className="nav__element">
              Manga
            </a>
            <a href="#" className="nav__element">
              About
            </a>
            <a href="#" className="nav__element">
              Help
            </a>
          </nav>
        </div>
      </CSSTransition>
      )
    </>
  );
}
