import React, { Component } from 'react';
import Order from '../components/Order';

const OrdersContainers = ({orders}) => {
        return (
            <React.Fragment>
                {orders.map(order => <Order order = {order} />)}
            </React.Fragment>
        )
}

export default OrdersContainers;