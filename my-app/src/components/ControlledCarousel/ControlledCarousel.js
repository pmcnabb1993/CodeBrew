import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Row, Col, Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import styles from "./ControlledCarousel.css";



class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      
      interval: 4000,
      slide: true
    };
  }

  handleSelect(selectedIndex, e) {
    
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, interval, slide } = this.state;

    return (
      <Carousel>
        <Carousel.Item>
          <img   alt="computercoffee" src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae19afb005f9f45df7170938bc3a661a&auto=format&fit=crop&w=2851&q=80" />
          <Carousel.Caption>
            <h1>Welcome</h1>
            <h3>Find a local place to code and enjoy some brew.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eaaa6e11b146f75c1a685578d3c89dff&auto=format&fit=crop&w=1350&q=80" />
          <Carousel.Caption>
            <h1>Reviews</h1>
            <h3>Coffee shops I have visited and my thoughts on them.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="https://images.unsplash.com/photo-1516342243255-ac2202f9f149?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75dacc47b95222986df91d7786c40b25&auto=format&fit=crop&w=1350&q=80" />
          <Carousel.Caption>
            <h1>Submit Your own</h1>
            <h3>Praesent commodo cursus magna.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;