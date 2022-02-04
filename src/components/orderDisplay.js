function OrderDisplay({ name, price, removeSubTotal, removeOrder}) {

    const removeFromOrder = () => {
            removeSubTotal(price);
            removeOrder(name);
    }
    
    return (
        <div className='row'>
            <div className="orderlist col">
                <p>{name} ${price}
                    <span><button className='deleteItem' type='button' onClick={removeFromOrder}>Delete</button></span>
                </p>
            </div>
        </div>
    );
}

export default OrderDisplay;