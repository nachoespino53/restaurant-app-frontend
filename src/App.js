import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import OrdersContainer from './containers/OrdersContainer';

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      orders: [],
      items: []
    }
  };

  componentDidMount() {
    this.fetchOrders();
  };

  ordersURL = () => "http://localhost:3000/orders"

  fetchOrders = () => {
    fetch(this.ordersURL())
    .then(res => res.json())
    .then(json => 
      this.setState({orders: json})
    ).catch(error => console.warn("Failed to fetch orders"))
  };

  render() {
    return (
      <div>
        <br />
      <NavBar />
      <br/>
      <div className="columns is-variable is-5">
          <div className="column  has-background-grey-lighter"></div>
          <div className="column is-half  has-background-grey-lighter"> <OrdersContainer orders = {this.state.orders} /> </div>
          <div className="column  has-background-grey-lighter"></div>
      </div>
      </div>
    );
  }
}
