import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';
import ListApp from "./components/ListApp";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/coffee" component={Coffee} />
        <Route exact path="/code" component={Code} />
      </Wrapper>

      <Footer />
    </div>
  </Router>
);

export default App;