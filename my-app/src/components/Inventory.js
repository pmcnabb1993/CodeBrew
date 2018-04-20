import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddShopForm from "./AddShopForm";
import EditShopForm from "./EditShopForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";
import samplecoffee from "../sample-coffee";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddShopForm addShop={this.props.addShop} />
        <button onClick={this.props.loadSamplecoffeeshops}>
          Reload Coffee Shops
        </button>
      </div>
    );
  }
}

export default Inventory;

