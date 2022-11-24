import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import Subscribe from "../../Components/Subscribe/Subscribe.jsx"

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact';
      })
  return (
    <section className="contact">
      <div className="container">
        <div className="allcontact row">
          <div className="left col-lg-5">
            <h1>
              We’d love to <br /> connect with <br /> you.
            </h1>
            <Link className="link" to="/">
              hello@thedailywork.us
            </Link>
            <div className="address">
              59 West 46th Street,
              <br /> New York City, NY 10036
            </div>
          </div>
          <div className="right col-lg-5">
            <div className="topform col-lg-12 row">
              <div className="fname col-lg-6">
                <label htmlFor="">FIRST NAME</label>
                <input type="text" />
              </div>
              <div className="lname col-lg-6">
                <label htmlFor="">LAST NAME</label>
                <input type="text"/>
              </div>
            </div>
            <div className="email">
              <label className="col-lg-12" htmlFor="">EMAIL</label>
              <input className="email" type="email" />
            </div>
            <div className="textarea">
              <label className="col-lg-12" htmlFor="">MESSAGE</label>
              <textarea name="" id="" cols="53" rows="5"></textarea>
            </div>
            <div className="sendbtn">
                <button className="send">SEND</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
    </section>
  );
};

export default Contact;
