import React from "react";
import Design from "./Background/Design.js";
import Preloader from "./Splash/splash_screen.js";
import "./Buttons/buttons.css";
import "./Big_buttons/big_buttons.css";
import phone from "./Big_buttons/phone.png";
import amazon from "./images/amazon.png";
import cafe from "./images/cafe.png";
import doorDash from "./images/door_dash.png";
import flipkart from "./images/flipkart.png";
import myntra from "./images/myntra.png";
import starbucks from "./images/starbucks.png";
import "./Carousel/carousel.css";
import "./infinite_carousel/infinite_carousel.css";
import barstool from "./images/barstool-store.svg";
import budweiser from "./images/budweiser.svg";
import buzzfeed from "./images/buzzfeed.svg";
import forbes from "./images/forbes.svg";
import macys from "./images/macys.svg"
import ThreeM from "./images/3m.svg";
import mrbeast from "./images/mrbeast.svg";
import menshealth from "./images/menshealth.svg"
import Carousel from "./Carousel/carousel_animation.js";
import cinema from "./Big_buttons/cinema.png";


function App() {
  return (
    <div className="app-container">
      <Design />
      <Preloader />
      <div className="container">
        <div className="btn"><a href="#">Sign Up</a></div>
        <div className="btn"><a href="#">Sign In</a></div>
      </div>

      <Carousel />

      <br />

      <div className="content-container">
        <div className="animated_card">
          {/* The animated card background */}
          <div className="card_background"></div>
            {/* The phone image */}
            <img src={phone} alt="" className="phone_image" />
          </div>
        <div className="text_under_card">Pay Phone Number</div>
      </div>
      <br />
      <br />
      <div className="content-container">
        <div style={{ width: '150px' }}></div>
          <div className="animated_card">
            {/* The animated card background */}
            <div className="card_background"></div>
              {/* The cinema image */}
              <img src={cinema} alt="" className="cinema_image" />
            </div>
          <div className="text_under_card">Book Tickets</div>
      </div>


      <br />
      <br />

      <div style={{ zIndex: 0, fontSize: '24px', textAlign: 'center', marginTop: '20px' }}>
        At Thousands of stores already! <br /> Partner with us!
      </div>


      <div className="logos">
        <div className="logos-slide">
          <img src={ThreeM} alt="3M" />
          <img src={barstool} alt="Barstool Store" />
          <img src={budweiser} alt="Budweiser" />
          <img src={amazon} alt="Amazon" />
          <img src={cafe} alt="Cafe" />
          <img src={doorDash} alt="Door Dash" />
          <img src={flipkart} alt="Flipkart" />
          <img src={myntra} alt="Myntra" />
          <img src={starbucks} alt="Starbucks" />
        </div>

        <div className="logos-slide">
          <img src={ThreeM} alt="3M" />
          <img src={barstool} alt="Barstool Store" />
          <img src={budweiser} alt="Budweiser" />
          <img src={amazon} alt="Amazon" />
          <img src={cafe} alt="Cafe" />
          <img src={doorDash} alt="Door Dash" />
          <img src={flipkart} alt="Flipkart" />
          <img src={myntra} alt="Myntra" />
          <img src={starbucks} alt="Starbucks" />
        </div>
    </div>

    </div>
  );
}

export default App;
