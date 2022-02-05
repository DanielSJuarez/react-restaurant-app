function OrderDisplay({ name, price, removeSubTotal, removeOrder, order, subTotal, quantity}) {

    const removeFromOrder = () => {
            removeSubTotal(price);
            removeOrder(name);
            quantity = quantity - 1;
    }

    const  addToQuantity = () => {
        quantity = quantity + 1;
        order(name, price, quantity);
        subTotal(price);
    }

    const deleteFromOrder = () => {
        removeSubTotal(price);
        removeOrder(name);
        quantity = 1;
}

    
    return (
        <div className='row'>
            <div className="orderlist col">
                <p>{name} ${price}
                    <span><button className='minus' type='button' onClick={removeFromOrder}>-</button></span>
                    <span>{quantity}</span>
                    <span><button className='pluss' type='button' onClick={addToQuantity}>+</button></span>
                    <span><button className='deleteItem' type='button' onClick={deleteFromOrder}>Delete</button></span>
                </p>
            </div>
        </div>
    );
}

export default OrderDisplay;