import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import OrdersContainer from './containers/OrdersContainer';
import OrderModal from './components/OrderModal';
import MenuBar from './components/MenuBar'

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      orders: [],
      items: [],
      showModal: false
    }
  };

  componentDidMount() {
    this.fetchOrders();
    this.fetchItems();
  };

  ordersURL = () => "http://localhost:3000/orders";
  itemsURL = () => "http://localhost:3000/items";

  fetchOrders = () => {
    fetch(this.ordersURL())
    .then(res => res.json())
    .then(json => this.setState({orders: json}))
    .catch(error => console.warn("Failed to fetch orders"))
  };

  fetchItems = () => {
    fetch(this.itemsURL())
    .then(res => res.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.warn("Failed to fetch items"))
  };

  showModal = id => {
    let order = this.state.orders.find(order => order.id === id);
    this.setState({showModal: order});
  }

  hideModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        <br />
      <NavBar />
      <br/>
      <br/>
      <div className="columns is-variable is-5">
          <div className="column  has-background-grey-lighter"><MenuBar /></div>
          <div className="column is-half  has-background-grey-lighter"> 
          <OrdersContainer  orders = {this.state.orders}
                            showModal = {this.showModal}
                            hideModal = {this.hideModal} /> 
          </div>
          <div className="column  has-background-grey-lighter"></div>
      </div>
        { this.state.showModal ? <OrderModal  order = {this.state.showModal} 
                                              hideModal = {this.hideModal} 
                                              items = {this.state.items} /> : null}
      </div>
    );
  }
}
