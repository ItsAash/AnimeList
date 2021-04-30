import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  let isNavOn = useRef(false);

  const handleBurgerClick = () => {
    // eslint-disable-next-line no-unused-vars
    const upperBun = document.querySelector(".upper__bun");
    // eslint-disable-next-line no-unused-vars
    const lowerBun = document.querySelector(".lower__bun");
    const mobileMenu = document.querySelector(".mobile__menu");

    isNavOn = !isNavOn;

    upperBun.classList.toggle("rotate-pos");
    lowerBun.classList.toggle("rotate-neg");

    console.log(isNavOn);
    if (!isNavOn) {
      mobileMenu.style.transform = "translateY(0%)";
    } else {
      mobileMenu.style.transform = "translateY(-150%)";
    }
  };

  return (
    <>
      <header>
        <div className="homepage__main">
          <Link to="/">
            <div className="logo">AnimeList</div>
          </Link>
          <nav>
            <Link to="#" className="nav__element">
              Anime
            </Link>
            <Link to="#" className="nav__element">
              Manga
            </Link>
            <Link to="#" className="nav__element">
              About
            </Link>
            <Link to="#" className="nav__element">
              Help
            </Link>
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

      <div className="mobile__menu">
        <nav className="mobile__nav">
          <a href="#" className="nav__element">
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
    </>
  );
}
