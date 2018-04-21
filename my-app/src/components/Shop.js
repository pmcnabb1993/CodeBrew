import React from "react";


class Shop extends React.Component {
  render() {
    const { image, name, rating, desc, location } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="rating">{rating}</span>
        </h3>
        <p>{desc}</p>
        <p>{location}</p>
      </li>
    );
  }
}

export default Shop;