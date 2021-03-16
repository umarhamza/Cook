import React, { Component } from 'react';
import Table from './components/Table';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';

import mockAPI from './api/mockAPI.json';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      itemsInBasket: [],
      subtotal: 0,
      total: 0,
      tax: 20,
      currency: '',
    };
  }

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem('basket'));

    if (!storedData) {
      // Populate the basket with the first 3 products and add a quantity and totals field
      const itemsInBasket = mockAPI.items
        .filter((item) => parseInt(item.id) <= 3)
        .map((item) => ({ ...item, quantity: 1, total: item.price }));

      this.setState(
        {
          itemsInBasket,
          products: mockAPI.items,
          currency: mockAPI.currency,
        },
        () => {
          localStorage.setItem('basket', JSON.stringify(this.state));
        }
      );
    } else {
      this.setState({ ...storedData });
    }
  }

  updateBasket = (updatedItem) => {
    const newItemsInBasket = this.state.itemsInBasket.map((item) =>
      updatedItem.id === item.id ? updatedItem : item
    );

    this.calculateTotal(newItemsInBasket);
  };

  calculateTotal = (newItemsInBasket) => {
    let subtotal = 0;

    // Update the subtotal
    newItemsInBasket.forEach((item) => {
      subtotal += parseInt(item.total);
    });

    // Update total
    const total = subtotal + parseInt(subtotal * (this.state.tax / 100));

    this.setState(
      {
        itemsInBasket: newItemsInBasket,
        subtotal,
        total,
      },
      () => {
        localStorage.setItem('basket', JSON.stringify(this.state));
      }
    );
  };

  addProduct = (id) => {
    const itemAlreadyInBasket = this.state.itemsInBasket.find(item => item.id === id);

    if (!itemAlreadyInBasket) {
      let newProduct = this.state.products.find((item) => {
        return item.id === id;
      });

      newProduct.quantity = 1;
      newProduct.total = newProduct.price;

      this.setState({
        itemsInBasket: [...this.state.itemsInBasket, newProduct],
      });
    }
  };

  removeProduct = (id) => {
    const newItemsInBasket = this.state.itemsInBasket.filter(item => item.id !== id);

    this.setState({itemsInBasket: newItemsInBasket}, () => {
        localStorage.setItem('basket', JSON.stringify(this.state));
        this.calculateTotal(newItemsInBasket);
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='table-col col col-8'>
            <Table
              itemsInBasket={this.state.itemsInBasket}
              currency={this.state.currency}
              updateBasket={this.updateBasket}
              removeProduct={this.removeProduct}
            />
          </div>
          <div className='sidebar-col col col-4'>
            <Sidebar basket={this.state} />
          </div>
        </div>
        <div className="product-carousel-wrapper">
          <Carousel products={this.state.products} addProduct={this.addProduct} />
        </div>
      </div>
    );
  }
}

export default App;

