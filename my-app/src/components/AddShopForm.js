import React from "react";
import PropTypes from "prop-types";
import { Button, Form  } from 'react-bootstrap';

class AddShopForm extends React.Component {
  nameRef = React.createRef();
  ratingRef = React.createRef();
  locationRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  goodRef = React.createRef();
  badRef = React.createRef();
  yelpRef = React.createRef();

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
       image: this.imageRef.value.value,
       good: this.goodRef.value.value,
       bad: this.badRef.value.value,
       yelp: this.yelpRef.value.value
     };
     this.props.addShop(shop);
     // refresh the form
     event.currentTarget.reset();
  };
  
  render() {
    return (
      <Form className="fish-edit" onSubmit={this.createShop}>
        <textarea name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea
          name="rating"
          ref={this.ratingRef}
          type="text"
          placeholder="Rating 1-5"
        />
        <textarea
          name="yelp"
          ref={this.yelpRef}
          type="text"
          placeholder="Yelp Score"
        />
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <textarea name="good" ref={this.goodRef} placeholder="The Good" />
        <textarea name="bad" ref={this.badRef} placeholder="The Bad" />
        <textarea
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <textarea
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
