import React from "react";

const MenuBar = () => {
  return (
      <aside className="menu">
          <p className="menu-label">General</p>
          <ul className="menu-list">
              <li>
                  <a href='/'>Dashboard</a>
              </li>
              <li>
                  <a href='/'>Customers</a>
              </li>
          </ul>
          <p className="menu-label">Administration</p>
          <ul className="menu-list">
              <li>
                  <a href='/'>Team Settings</a>
              </li>
              <li>
                  <a className="" href='/'>Manage Your Team</a>
                  <ul>
                      <li>
                          <a href='/'>Members</a>
                      </li>
                      <li>
                          <a href='/'>Plugins</a>
                      </li>
                      <li>
                          <a href='/'>Add a member</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a href='/'>Invitations</a>
              </li>

              <li>
                  <a href='/'>Authentication</a>
              </li>
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
