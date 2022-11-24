import React from "react";
import "./AboutSub.css";

const AboutSub = () => {
  return (
    <section className="aboutsub">
      <div className="container">
        <div className="allaboutsub row">
          <div className="left col-lg-5">
            <h3>Suscribe to The Daily Work</h3>
          </div>
          <div className="center col-lg-1">
            <div className="line"></div>
          </div>
          <div className="right col-lg-5">
            <h5>
              Added to the rich text element using the "When inside of" nested
              selector system.
            </h5>
            <form>
                <input type="text" placeholder="Email" />
                <input className="btn" type="submit" value="Subscribe" />
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSub;
