import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <nav className="footer__nav">
          <div className="brand__icon logo">AnimeList</div>
          <div className="navigations">
            <dl className="navigation__list">
              <dd>
                <a href="#">Home</a>
              </dd>
              <dd>
                <a href="#">Anime</a>
              </dd>
              <dd>
                <a href="#">Manga</a>
              </dd>
              <dd>
                <a href="#">About</a>
              </dd>
              <dd>
                <a href="#">Help</a>
              </dd>
            </dl>

            <dl className="useful__links__list">
              <dd>
                <a href="https://myanimelist.net/" className="myanimelist">
                  MyAnimeList
                </a>
              </dd>
              <dd>
                <a href="https://anilist.co/" className="anilist">
                  AniList
                </a>
              </dd>
              <dd>
                <a href="#">HeHe</a>
              </dd>
            </dl>
            <dl>
              <dd>
                <a href="#">Apps</a>
              </dd>
              <dd>
                <a href="#">Site Stats</a>
              </dd>
              <dd>
                <a href="#">Recommendations</a>
              </dd>
              <dd>
                <a href="#">API</a>
              </dd>
              <dd>
                <a href="#">Donate</a>
              </dd>
            </dl>
          </div>
          <div className="social__links"></div>
        </nav>
        <div className="footer__text">©2021 All Rights Reserved.</div>
      </footer>
    </div>
  );
}
