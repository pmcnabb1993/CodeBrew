
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar, Header, Label } from 'reactstrap';
import './ProfileCard.css';

class ProfileCard extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>Welcome {profile.name}</h1>
            <img src={profile.picture} alt="profile" />
        </div>
      </div>
    );
  }
}

export default ProfileCard;