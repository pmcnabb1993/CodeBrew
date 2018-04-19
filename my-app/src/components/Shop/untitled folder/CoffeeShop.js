import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class CoffeeShop extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      rating: PropTypes.number,
      location: PropTypes.string,
      status: Proptypes.string
    }),
  };
  render() {
    const { image, name, desc, rating, location, status } = this.props.details;
    return (
      <li className="shop-coffee">
        <img src={image} alt={name} />
        <h3 className="shop-name">
          {name}
          <span className="rating">{rating}</span>
        </h3>
        <p>{desc}</p>
        <h4>{location}</h4>
        <h4>{status}</h4>
      </li>
    );
  }
}

export default CoffeeShop;
