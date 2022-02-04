function MenuList({ name, price, subTotal, order }) {

    const addToOrder = () => {
        subTotal(price);
        order(name, price);
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