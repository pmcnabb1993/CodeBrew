import React, { Component } from 'react';
import { Row, Col, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Weather from "../components/Weather";
import { Button } from 'reactstrap';
import Card from "../components/Card";
import ControlledCarousel from "../components/ControlledCarousel";
import Wrapper from "../components/Wrapper";


class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <Wrapper>
      <ControlledCarousel />
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
  </Wrapper>
);
  }
}

export default Home;
