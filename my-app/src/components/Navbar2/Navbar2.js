import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";




const Navbar2 = props => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Code&Brew
        </Link>
      </div>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l mb0-l mb3">
        <a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="About" href="/about">About</a>

        <a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Coffee" href="/coffee">Coffee</a>
        <a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Code" href="/code">Code</a>
      </div>
    </div>
  </nav>
);

export default Navbar2;


