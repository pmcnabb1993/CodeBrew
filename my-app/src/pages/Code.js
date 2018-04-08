import React, { Component } from "react";
import API from "../utils/API";
import ReactDOM from 'react-dom';
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import GitCard from "../components/GitCard";

class Code extends Component {
  state = {
    search: "",
    error: ""
  };

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search GitHub User!</h1>
        <GitCard />
      </Container>
    );
  }
}

export default Code;
