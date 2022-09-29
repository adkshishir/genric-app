import React from "react";
import spotify from "./Spotify Logo.png";
import youtube from "./Youtube Logo.png";
import faceBook from "./Facebook Logo.png";
const Footer = () => {
  return (
    <div className="main-footer">
      <div class="container main-footer-container">
        <h3 class="band-name">The Generics</h3>
        <ul class="nav footer-nav">
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
              <img src={spotify} alt=""></img>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={faceBook} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
