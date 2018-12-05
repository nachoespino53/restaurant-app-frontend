import React from 'react';

const renderRow = (items, item) => {
    let selectedItem = items.find(i => i.id === item.item_id);
    return (
        <tr>
            <th>{selectedItem.name}</th>
            <th>{item.quantity}</th>
            <th>{selectedItem.price}</th>
            <th>{selectedItem.price * item.quantity}</th>
        </tr>
    )
}

const OrderModal = ({order, hideModal, items}) => {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Order# {order.id} for {order.first_name}</p>
                    <button className="delete" aria-label="close" onClick={hideModal}></button>
                </header>
                <section className="modal-card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total:</th>
                                <th>{order.total ? order.total : null}</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {order.order_items.map(item => renderRow(items, item))}
                        </tbody>
                    </table>
                </section>
                <footer className="modal-card-foot">
                    <button className="button">Edit</button>
                    <button className="button" onClick={hideModal} >Close</button>
                </footer>
            </div>
        </div> 
)}

export default OrderModal;