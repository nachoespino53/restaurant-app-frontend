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
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        <tbody>
                            {order.order_items.map(item => renderRow(items, item))}
                        </tbody>
                    </table>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button" onClick={hideModal} >Cancel</button>
                </footer>
            </div>
        </div> 
)}

export default OrderModal;