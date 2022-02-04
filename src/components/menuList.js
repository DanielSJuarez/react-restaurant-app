function MenuList({name, price}) {
    return (
        <div className='row'>
            <div className="col">
            {name} ${price}
            </div>
        </div>
    );
}

export default MenuList;