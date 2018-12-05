import React from 'react';

const Order = ({ order, showModal }) => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="is-small">{`Order: ${order.id}`}</p>
                <p className="is-small">{`Name: ${order.first_name} ${order.last_name}`}</p>
                <a className="button is-rounded" href='/'>Finalize</a>
                <a className="button is-rounded" onClick={event => showModal(order.id)} href='/'> Details</a>
            </div>
        </div> 
    )
}

export default Order;