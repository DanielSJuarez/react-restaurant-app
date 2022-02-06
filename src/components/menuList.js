function MenuList({ name, price, subTotal, order, quantity, url}) {

    const addToOrder = () => {
        subTotal(price);
        order(name, price, quantity);
    }

    return (
        // <div className='row'>
            <div className="col-md-6 col-lg-3 img-wrap">
                <div className='imgDiv'>
                <img src={url} alt={name} onClick={addToOrder}/>
                </div>
                <button className='foodItemButtons' type='button' onClick={addToOrder}>{name} ${price}</button>
            </div>
        // </div>
    );
}

export default MenuList;