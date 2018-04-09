import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./CardCoffee.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardDeck } from 'reactstrap';

  const CardCoffee = (props) => {
    return (
      <CardColumns>
        <Card>
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae19afb005f9f45df7170938bc3a661a&auto=format&fit=crop&w=2851&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae19afb005f9f45df7170938bc3a661a&auto=format&fit=crop&w=2851&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae19afb005f9f45df7170938bc3a661a&auto=format&fit=crop&w=2851&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae19afb005f9f45df7170938bc3a661a&auto=format&fit=crop&w=2851&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardColumns>
    );
  };

  export default CardCoffee;