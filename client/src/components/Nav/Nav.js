import React from "react";
import "./navbar.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top at-navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Avocado Toast
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
