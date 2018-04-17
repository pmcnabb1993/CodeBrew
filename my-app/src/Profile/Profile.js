import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Navbar, Header, Label } from 'reactstrap';
import './Profile.css';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Weather from "../components/Weather";
import { Button } from 'reactstrap';


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
              <Col size="md-12">
                <h1>Your Project ToDos!</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p>
                  Hey there. Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
                  molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
                  hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh
                  porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam
                  blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta
                  augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
                </p>
                <p>
                  Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
                  tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
                  amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
                  et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
                  at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
                  erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
                  nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas
                  vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero.
                  Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam
                  tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit
                  pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      
    );
  }
}

export default Profile;
