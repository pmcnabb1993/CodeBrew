import React from "react";




class Shop extends React.Component {
  render() {
    const { image, name, rating, desc, good, bad, yelp, location } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="yelp">{yelp}</span>
          <span className="rating">{rating}</span>

        </h3>
        <div className="hr"></div>
        <p>{desc}</p>
        <h2>{good}</h2>
        <h2>{bad}</h2>
        <h3>{location}</h3>
      </li>
    );
  }
}

export default Shop;