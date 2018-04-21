import React from "react";


class Order extends React.Component {
  renderOrder = key => {
    const shop = this.props.coffeeshops[key];
    const count = this.props.order[key];
  
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          
        </div>
      </div>
    );
  }
}

export default Order;
