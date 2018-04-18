import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Coffee from './Pages/Coffee';
import Weather from "./components/Weather";


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
            </Navbar.Header>
            
            <Weather />
            
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
