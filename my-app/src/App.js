import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Coffee from './components/Coffee';
import Weather from "./components/Weather"; 
import base from './base';
import Card from "./components/Card";
import Alert from "./components/Alert";
import Members from "./components/Members";
import CardCoffee from "./components/CardCoffee";
import PropTypes from "prop-types";
import samplecoffee from "./sample-coffee";
import Shop from "./components/Shop";
import AddShopForm from "./components/AddShopForm";
import EditShopForm from "./components/EditShopForm";
import Inventory from "./components/Inventory";



class App extends React.Component {

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
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Code&Brew</a>
            </Navbar.Brand>
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="link"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="link"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'coffee')}
                  >
                    Coffee
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="link"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'code')}
                  >
                    Code
                  </Button>
                )
            }
            {
              isAuthenticated() &&  userHasScopes(['write:messages']) && (
                  <Button
                    bsStyle="primary "
                    className="btn-margin hover"
                    onClick={this.goTo.bind(this, 'admin')}
                  >
                    Admin
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Weather />
                )
            }
            </Navbar.Header>
            <Nav pullRight>
            <NavItem>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="link"
                    className="pull-right"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="link"
                    className="pull-right"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
