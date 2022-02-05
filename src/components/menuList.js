function MenuList({ name, price, subTotal, order, quantity }) {

    const addToOrder = () => {
        subTotal(price);
        order(name, price, quantity);
    }

    return (
        <div className='row'>
            <div className="col">
                <button className='foodItemButtons' type='button' onClick={addToOrder}>{name} ${price}</button>
            </div>
        </div>
    );
}

export default MenuList;