import React, { Component } from "react";
import auth0 from 'auth0-js';
import { Auth } from '../Auth/Auth.js';



class Log extends Component {
  login() {
    this.props.auth.login();
  }
}

export default Log;