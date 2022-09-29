import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="container content-section">
      <h2 class="section-header">TOURS</h2>
      <div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 16</span>
          <span class="tour-item tour-city">DETROIT, MI</span>
          <span class="tour-item tour-arena">DTE ENERGY MUSIC THEATRE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 19</span>
          <span class="tour-item tour-city">TORONTO, ON</span>
          <span class="tour-item tour-arena">BUDWEISER STAGE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 22</span>
          <span class="tour-item tour-city">BRISTOW, VA</span>
          <span class="tour-item tour-arena">JIGGY LUBE LIVE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 29</span>
          <span class="tour-item tour-city">PHOENIX, AZ</span>
          <span class="tour-item tour-arena">AK-CHIN PAVILION</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">AUG 2</span>
          <span class="tour-item tour-city">LAS VEGAS, NV</span>
          <span class="tour-item tour-arena">T-MOBILE ARENA</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">AUG 7</span>
          <span class="tour-item tour-city">CONCORD, CA</span>
          <span class="tour-item tour-arena">CONCORD PAVILION</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
