import React from "react";
import Card from "./Card";
import Alert from "./Alert";
import Members from "./Members";
import CardCoffee from "./CardCoffee";
import Wrapper from "../components/Wrapper";
// import base from "./base";
// import AddShopForm from "./AddShopForm";
// import EditShopForm from "./EditShopForm";
// import PropTypes from "prop-types";

import Order from "./Order";
import Inventory from "./Inventory";
import samplecoffee from "../sample-coffee";
import Shop from "./Shop";
import axios from "axios";


class Coffee extends React.Component {
  state = {
    coffeeshops: {},
    order: {}
  };
  
  addShop = shop => {
    // 1. Take a copy of the existing state
    const coffeeshops = { ...this.state.coffeeshops };
    // 2. Add our new fish to that coffeeshops variable
    coffeeshops[`shop${Date.now()}`] = shop;
    // 3. Set the new coffeeshops object to state
    this.setState({ coffeeshops });
  };

  loadCoffeeShops = () => {
    this.setState({ coffeeshops: samplecoffee });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  
    render() {
      return (
        <Wrapper>
        <h1 className="h1review">Coffee Shop Reviews!</h1>
        <h3 className="text-center">CodeBrew Thoughts and Preferences</h3>
        <div>
        <Inventory
          addShop={this.addShop}
          loadCoffeeShops={this.loadCoffeeShops}
        />
        </div>
        <div className="catch-of-the-day">
        <div className="menu">
          <ul className="fishes">
            {Object.keys(this.state.coffeeshops).map(key => (
              <Shop
                key={key}
                index={key}
                details={this.state.coffeeshops[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
      </div>
      </Wrapper>
      );
    }
  }
  
  export default Coffee;
  
            
            
        
  


