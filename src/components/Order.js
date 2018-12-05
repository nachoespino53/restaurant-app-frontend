import React from 'react';
import OrderModal from './OrderModal'



const Order = ({ order, showModal }) => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="is-small">{`Order: ${order.id}`}</p>
                <p className="is-small">{`Name: ${order.first_name} ${order.last_name}`}</p>
                <a className="button is-rounded">Finalize</a>
                <a className="button is-rounded" onClick={event => showModal(order.id)}> Details</a>
            </div>
        </div> 
    )
}

export default Order;