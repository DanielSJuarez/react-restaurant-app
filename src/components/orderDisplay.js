function OrderDisplay({ name, price, removeSubTotal, removeOrder, order, subTotal, quantity}) {

    const removeFromOrder = () => {
            quantity = quantity - 1;
            console.log(quantity);
            removeSubTotal(price);
            removeOrder(name);           
    }

    const  addToQuantity = () => {
        quantity = quantity + 1;
        order(name, price, quantity);
        subTotal(price);
        console.log(quantity);
    }

    const deleteFromOrder = () => {
        removeSubTotal(price);
        removeOrder(name);
        quantity = 1;
        console.log(quantity);

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