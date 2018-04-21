import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import GitCard from "../components/GitCard";
import Wrapper from "../components/Wrapper";

class Code extends Component {

  render() {
    return (
      <Wrapper>
      <Container>
        <h1 className="text-center">Search GitHub User!</h1>
        <GitCard />
        <h1>To Do List!</h1>
        <h1>Project Manager</h1>
        <h1>Study Logger</h1>
        <h1>Helpful Links</h1>
      </Container>
      </Wrapper>
    );
  }
}

export default Code;
