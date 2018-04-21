import React from "react";

class AddShopForm extends React.Component {
  nameRef = React.createRef();
  ratingRef = React.createRef();
  locationRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createShop = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const shop = {
      name: this.nameRef.value.value,
      rating: this.ratingRef.value.value,
      location: this.locationRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addShop(shop);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createShop}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="rating"
          ref={this.ratingRef}
          type="text"
          placeholder="Rating 1-5"
        />
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <input
          name="location"
          ref={this.locationRef}
          type="text"
          placeholder="Location"
        />
        <button type="submit">+ Add Coffee Shop</button>
      </form>
    );
  }
}

export default AddShopForm;
