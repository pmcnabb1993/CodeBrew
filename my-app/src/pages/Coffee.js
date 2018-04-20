import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Members from "../components/Members";
import CardCoffee from "../components/CardCoffee";
import PropTypes from "prop-types";
import samplecoffee from "../sample-coffee";
import Shop from "../components/Shop";
import base from "../base";
import AddShopForm from "../components/AddShopForm";
import EditShopForm from "../components/EditShopForm";
import Inventory from "../components/Inventory";

class Coffee extends Component {
  componentWillMount() {
    this.setState({ coffeeshops: {samplecoffee} });
  }
    static propTypes = {
      match: PropTypes.object
    };
  
    componentDidMount() {
      const { params } = this.props.match;
      // first reinstate our localStorage
      const localStorageRef = localStorage.getItem(params.storeId);
      if (localStorageRef) {
        this.setState({ coffeeshops: JSON.parse(localStorageRef) });
      }
  
      this.ref = base.syncState(`${params.storeId}/coffeeshops`, {
        context: this,
        state: "coffeeshops"
      });
    }
  
  
    componentWillUnmount() {
      base.removeBinding(this.ref);
    }
  
    addShop = shop => {
      // 1. Take a copy of the existing state
      const coffeeshops = { ...this.state.coffeeshops };
      // 2. Add our new shop to that coffeeshops variable
      coffeeshops[`shop${Date.now()}`] = shop;
      // 3. Set the new coffeeshops object to state
      this.setState({ coffeeshops });
    };
  
    updateShop = (key, updatedShop) => {
      // 1. Take a copy of the current state
      const coffeeshops = { ...this.state.coffeeshops };
      // 2. Update that state
      coffeeshops[key] = updatedShop;
      // 3. Set that to state
      this.setState({ coffeeshops });
    };
  
    deleteShop = key => {
      // 1. take a copy of state
      const coffeeshops = { ...this.state.coffeeshops };
      // 2. update the state
      coffeeshops[key] = null;
      // 3.  update state
      this.setState({ coffeeshops });
    };
  
    loadSamplecoffeeshops = () => {
      this.setState({ coffeeshops: samplecoffee });
      
    };
  
  
    render() {
      return (
        <div className="Code&Brew">
          <div className="menu">
            <h1>Local Coffee Shop Reviews</h1>
            <ul className="coffeeshops">
              {Object.keys(this.state.coffeeshops).map(key => (
                <Shop
                  key={key}
                  index={key}
                  details={this.state.coffeeshops[key]}
                />
              ))}
            </ul>
          </div>
          <Inventory
          addShop={this.addShop}
          loadSamplecoffeeshops={this.loadSamplecoffeeshops}
           />
          <div>
          <CardCoffee />
        </div>
        </div>
      );
    }
  }
  
  export default Coffee;
  
            
            
        
  


