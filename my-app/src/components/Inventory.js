import React from "react";
import AddShopForm from "./AddShopForm";
import { Button, Form  } from 'react-bootstrap';


class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Suggest A Review</h2>
        <AddShopForm addShop={this.props.addShop} />
        <Button onClick={this.props.loadCoffeeShops}>
          Update Reviews
        </Button>
      </div>
    );
  }
}

export default Inventory;

