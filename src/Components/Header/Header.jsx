import React from "react";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="containers">
        <div className=" all">
          <div className="headerTop row justify-content-between align-items-center col-lg-12">
            <div className="headerTop-left col-lg-3">
              <FaFacebookF />
              <BsTwitter />
              <BsSearch />
            </div>
            <div className="headerTop-center col-lg-6">
              <img
                src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630e044bdd57f25c23d6adb0_The-daily-work-logo.svg"
                alt=""
              />
            </div>
            <div className="headerTop-right col-lg-3 text-end">
              <NavLink to="/">About</NavLink>
              <NavLink to="/" className="ms-4">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="headerBottom">
            <NavLink to="/">Travel</NavLink>
            <NavLink to="/">Food</NavLink>
            <NavLink to="/">Opinion</NavLink>
            <NavLink to="/">Life</NavLink>
            <NavLink to="/">Design</NavLink>
            <NavLink to="/">Technology</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;