import React from "react";

const MenuBar = ({categories}) => {
  return (
      <aside className="menu">
          <p className="menu-label">General</p>
          <ul className="menu-list">
              <li>
                  <a href='/'>Dashboard</a>
              </li>
              <li>
                  <a className = "is-active" href='/'>Orders</a>
              </li>
          </ul>
          <p className="menu-label">Order Management</p>
            <ul className="menu-list">
                <li><a href='/'>Search</a></li>
            </ul>
          <p className="menu-label">Item Management</p>
            <ul className="menu-list">
                {categories.map(category => <li key = {category.id}><a href='/'>{category.name[0].toUpperCase() + category.name.slice(1)}</a></li>)}
            </ul>
          <p className="menu-label">Transactions</p>
          <ul className="menu-list">
              <li>
                  <a href='/'>Payments</a>
              </li>
              <li>
                  <a href='/'>Transfers</a>
              </li>
              <li>
                  <a href='/'>Balance</a>
              </li>
          </ul>
      </aside>
  );
};

export default MenuBar;
