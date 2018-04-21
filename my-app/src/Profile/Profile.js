import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar, Header, Label } from 'reactstrap';
import './Profile.css';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Weather from "../components/Weather";
import { Button } from 'reactstrap';
import Wrapper from "../components/Wrapper";


class Profile extends Component {
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
            <div>
            <Wrapper>
            <Row>
            <Col xs={6} md={12}>
            <div className="cardmain">
            <img className="profilecard" src={profile.picture} alt="profile" />
            <div className="profile-area">
              <h1>Welcome</h1>
              <h3 className="profilename">{profile.name} </h3>
              </div>
            </div>
            </Col>
            </Row>
            <Container style={{ marginTop: 30 }}>
            <Row>
            <Col xs={6} md={12}>
                <h1>Your Reviews</h1>
                <h1>Contact Info</h1>
                <h1>GitHub Friends List</h1>
              </Col>
            </Row>
            <Row>
            <Col xs={6} md={12}>
              </Col>
            </Row>
          </Container>
          </Wrapper>
        </div>
      
    );
  }
}

export default Profile;
