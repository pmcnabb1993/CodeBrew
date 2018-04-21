import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import LoginPage from './LoginPage/LoginPage';
import Coffee from './components/Coffee';
import Code from './Pages/Code';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Ping from './Ping/Ping';


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
             <Home auth={auth} {...props} />
             )
           )} />

          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />

          <Route path="/coffee" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
              <Coffee auth={auth} {...props} />
            )
          )} />

          <Route path="/code" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/login"/>
            ) : (
              <Code auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
  );
}
