import React from "react";
import AddShopForm from "./AddShopForm";


class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddShopForm addShop={this.props.addShop} />
        <button onClick={this.props.loadCoffeeShops}>
          Reload Coffee Shops
        </button>
      </div>
    );
  }
}

export default Inventory;

