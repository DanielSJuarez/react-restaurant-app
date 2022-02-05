import { useState } from "react";
import MenuList from "./menuList";
import OrderDisplay from "./orderDisplay";
import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(MENU);
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]);
    const [screen, setScreen] = useState(false);

    const subTotal = (price) => {
        setTotal(total + price);
    }

    const order = (name, price) => {
        const newOrderItem = {
            name,
            price,
        }
        setOrderList([...orderList, newOrderItem]);
    };

    const removeSubTotal = (price) => {
        setTotal(total - price);
    };

    const removeOrder = (name) => {
        const removeSelectedItem = [...orderList];
        const index = removeSelectedItem.findIndex(orderList => orderList.name === name);
        removeSelectedItem.splice(index, 1);
        setOrderList(removeSelectedItem);
    }

    const clearOrder = () => {
        localStorage.setItem(orderList, JSON.stringify(orderList));
        setTotal(0);
        setOrderList([]);
        setScreen(false);
    }


    const tacoSelection = menu.filter(menu => (
        menu.catagory === 'tacos'
    ));

    const tacoDisplay = tacoSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const pizzaSelection = menu.filter(menu => (
        menu.catagory === 'pizza'
    ));

    const pizzaDisplay = pizzaSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const sidesSelection = menu.filter(menu => (
        menu.catagory === 'sides'
    ));

    const sidesDisplay = sidesSelection.map(menu => (
        <MenuList key={menu.id} {...menu} subTotal={subTotal} order={order} />
    ));

    const orderDisplay = orderList.map(item => (
        <OrderDisplay {...item} removeSubTotal={removeSubTotal} removeOrder={removeOrder} />
    ));

    const menuScreen = (
        <div className="container">
            <div className='row'>
                <h3 className='menuDisplay col'>Menu</h3>
                <div className="col">
                    <button className='orderButton' onClick={() => setScreen(true)}>Order Total</button>
                    <p>${total}</p>
                </div>
                <div className='menuList col'>
                    <h3 className='menuHeader'>Menu</h3>
                    <section className='tacoDisplay'>
                        <p className='tacoHeader'>Tacos</p>
                        {tacoDisplay}
                    </section>
                    <section className='pizzaDisplay'>
                        <p className='pizzaHeader'>Pizza</p>
                        {pizzaDisplay}
                    </section>
                    <section className='sideDisplay'>
                        <p className='sidesHeader'>Sides</p>
                        {sidesDisplay}
                    </section>
                </div>
            </div>
        </div>
    )

    const orderScreen = (
        <>
            <h3 className='restaurantsDisplay col'>Your Order</h3>
            <div>
                {orderDisplay}
            </div>
            <div className="col">
                <p>Sub-Total ${total}</p>
                <button className='backToMenu' onClick={() => setScreen(false)}>Back to Menu</button>
                <button className='orderButton' onClick={clearOrder}>Pay Now</button>
            </div>
        </>
    )

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='restaurantsDisplay col'>Hook My Food Cafe</div>
                    {screen ? orderScreen : menuScreen}
                </div>
            </div>
        </>
    );
}

export default HookMyFood;