import React from "react";
import PropTypes from "prop-types";
import { Button, Form  } from 'react-bootstrap';

class AddShopForm extends React.Component {
  nameRef = React.createRef();
  ratingRef = React.createRef();
  locationRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
     addShop: PropTypes.func
   };

  createShop = (event) => {
    // 1.  stop the form from submitting
    event.preventDefault();
    console.log(this.nameRef.value);
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
      <Form className="fish-edit" onSubmit={this.createShop}>
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
        <Button type="submit">+ Add Coffee Shop</Button>
      </Form>
    );
  }
}

export default AddShopForm;
