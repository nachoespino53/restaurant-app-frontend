import React, { Component } from 'react';
import Order from '../components/Order';

const OrdersContainers = ({orders, showModal}) => {
        return (
            <React.Fragment>
                {orders.map(order => <Order order = {order} showModal = {showModal} />)}
            </React.Fragment>
        )
}

export default OrdersContainers;