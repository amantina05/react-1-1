import React, { Component } from 'react';

//creating a class component
//called App and make it default export

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // products: [
      //   {
      //     id: 1,
      //     imageUrl: 'https://via.placeholder.com/150x150',
      //     title: 'fancy hat',
      //     price: 12.99,
      //     description: 'has a feather in it.',
      //   },
      //   {
      //     id: 2,
      //     imageUrl: 'https://via.placeholder.com/150x150',
      //     title: 'fancy car',
      //     price: 15750.45,
      //     description: 'goes vroom vroom.',
      //   },
      //   {
      //     id: 3,
      //     imageUrl: 'https://via.placeholder.com/150x150',
      //     title: 'simple rock',
      //     price: 5.0,
      //     description: 'it is a rock',
      //   },
      // ],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            'Headgear commonly used by fishermen. Increases fishing skill marginally.',
          price: 12.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
        {
          id: 2,
          title: 'Metal Hat',
          description: 'Uncomfortable, but sturdy.',
          price: 8.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
      beachGear: [
        {
          id: 3,
          title: 'Tent',
          description: 'Portable shelter.',
          price: 32.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
      cart: [],
      address: '',
      creditCard: '',
    };
  }

  //creating a addtocart method
  addToCart(item) {
    //use the spread operator to copy all the products that are in the cart & add our new product
    this.setState({
      // copy all products already in the cart array
      // then push our new item into the end of the cart array
      cart: [...this.state.cart, item],
    });
  }
  //creating a checkout method
  checkout() {
    //sets the cart to an empty array and calls an alert
    // this.setState({ cart: []})
    // alert('Purchase is complete! :)')
    if (this.state.address.length > 0 && this.creditCard.length > 0) {
      this.setState({ cart: [] });
      alert('Purchase is complete! :)');
    } else {
      alert('Please fill out the required fields.');
    }
  }
  //handleAddressInput method
  handleAddressInput = e => {
    this.setState({ address: e.target.value });
  };
  //handleCreditCardInput method
  handleCreditCardInput = e => {
    this.setState({ creditCard: e.target.value });
  };

  //creating a render method
  //should return 2 section elements
  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <h2>Hats</h2>
          {/* using map on the products array on state to return products infor */}
          {this.state.hats.map(item => (
            //giv it a key & className
            <div key={item.id} className="product">
              {/* elements for all of the products info */}
              <img src={item.imageUrl} />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.priice}</p>
                {/* include a button that says add to cart for each product */}
                {/* <button>Add to Cart</button> */}
                {/* assign a new onclick handler for add to car
                when calling a method with an argument, wrap the method invocation in an arrow function */}
                <button onClick={() => this.addtoCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: ${/* use reduce to find the actual total number */}
            {this.state.cart.reduce((totalPrice, product) => {
              totalPrice += product.price;
            }, 0)}
          </h2>
          <div className="inputs">
            <input
              placeholder="address"
              value={this.state.address}
              onChange={this.handleAdressInput}
            />
            <input
              placeholder="credit card number"
              value={this.state.creditCard}
              onChange={this.handleCreditCardInput}
            />
          </div>
          <button onClick={() => this.checkout}>Checkout</button>
          {/* using map on the carts array on state to return a combo of elements to render */}
          {this.state.cart.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
