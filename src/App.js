// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

// CSS --Eliminate
import './App.css';

// Components
import NavBar from './containers/NavBar';
import OrdersContainer from './containers/OrdersContainer';
import OrderModal from './components/OrderModal';
import MenuBar from './components/MenuBar';
import Login from './components/Login';

export const backendAPI = () => "http://100.26.186.217:3000"

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      orders: [],
      items: [],
      categories: [],
      showModal: false
    }
  };

  componentDidMount() {
    this.fetchOrders();
    this.fetchItems();
    this.fetchCategories();
  };

  ordersURL = () => `${backendAPI()}/orders`;
  itemsURL = () => `${backendAPI()}/items`;

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

  fetchCategories = () => {
    this.setState({
      categories: [
        {name: "appetizer", id: 1},
        {name: "sandwich", id: 2},
        {name: "pasta", id: 3},
        {name: "dinner", id: 4},
        {name: "pizza", id: 5},
        {name: 'kids', id: 6},
        {name: "beverage", id: 7},
        {name: "dessert", id: 8},
        {name: "non-italian",id: 9}]
    })
  }

  showModal = (id) => {
    let order = this.state.orders.find(order => order.id === id);
    this.setState({showModal: order});
  }

  hideModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <br />
        <NavBar />
        <br/>
        <br/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" render={() => {
          return (
            <React.Fragment>
            <div className="columns is-variable is-5">
              <div className="column  has-background-grey-lighter"><MenuBar categories = {this.state.categories}/></div>
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
            </React.Fragment>
            )
        }} />
        </React.Fragment>
      </Router>
    );
  }
}
