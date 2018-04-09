import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Members from "../components/Members";
import CardCoffee from "../components/CardCoffee";

class Coffee extends Component {
  state = {
    image: "",
    error: ""
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Places to Code!</h1>
        <h3 className="text-center">
          A list of Austin coffee shops and their CodeBrew raiting.
        </h3>
        <div>
          <CardCoffee />
        </div>
      </div>
    );
  }
}

export default Coffee;
