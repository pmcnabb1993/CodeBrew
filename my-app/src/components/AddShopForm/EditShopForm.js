import React from "react";
import PropTypes from "prop-types";

class EditShopForm extends React.Component {
  static propTypes = {
    shop: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      rating: PropTypes.number,
      location: PropTypes.string
    }),
    index: PropTypes.string,
    updateShop: PropTypes.func
  };
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update that shop
    // 1. Take a copy of the curernt shop
    const updatedShop = {
      ...this.props.shop,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateShop(this.props.index, updatedShop);
  };
  render() {
    return (
      <div className="shop-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.shop.name}
        />
        <input
          type="text"
          name="rating"
          onChange={this.handleChange}
          value={this.props.shop.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.shop.status}
        >
          <option value="dayhours">Day Hours</option>
          <option value="24hour">24Hour!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.shop.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.shop.image}
        />
        <button onClick={() => this.props.deleteShop(this.props.index)}>
          Remove Coffee Shop
        </button>
      </div>
    );
  }
}

export default EditShopForm;
