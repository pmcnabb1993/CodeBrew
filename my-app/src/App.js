import React, { Component } from "react";
import auth0 from 'auth0-js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Log from "./pages/Log";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar } from 'reactstrap';
import Auth from './Auth/Auth.js';
import Callback from './Callback/Callback';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
  
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


export default App;