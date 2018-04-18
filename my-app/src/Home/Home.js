import React, { Component } from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Weather from "../components/Weather";
import { Button } from 'reactstrap';
import Card from "../components/Card";
import ControlledCarousel from "../components/ControlledCarousel";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";


class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
      <Wrapper>
      <ControlledCarousel />
      <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome to Code&Brew!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <div className="aboutp">
          <p>
          Finding a good coffee shop to study at can be complicated, but it doesn’t have to be. We are sharing our reviews of the best local spots based on specific criteria,
          like study atmostphere, frequence of outlets, quality of wifi and of course how their coffee tastes! Code&Brew exists to help you navigate the coffee shops in your local area so you can stay focus on what's important. 
          </p>
          </div>
        </Col>
      </Row>
    </Container>
    </Wrapper>
    <Footer />
    </div>
    );
  }
}

export default Home;
