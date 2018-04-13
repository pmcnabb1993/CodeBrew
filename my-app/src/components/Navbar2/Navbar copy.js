import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Code&Brew
        </Link>
      </div>
      <ul className="nav navbar-nav hover-red">
        <li className={window.location.pathname === "/discover" ? "active" : ""}>
          <Link to="/discover">About</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <button type="submit" className={window.location.pathname === "/search" ? "active" : ""}>
        <Link to="/search">Log In</Link>
      </button>
    </div>
  </nav>
);

export default Navbar;

<div className="db dtc-l v-mid w-100 w-75-l tc tr-l mb0-l mb3">
<a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Coffee" href="/">Coffee</a>
<a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Places" href="/places">Places</a>
<a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Method" href="/method">Method</a>
<a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="Gear" href="/gear">Gear</a>
<a className="biorhyme link hover-red black-80 dib mr3 mr4-l" title="About" href="/about">About</a>
</div>
