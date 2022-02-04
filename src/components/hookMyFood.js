import { useState } from "react";
import MenuList from "./menuList";
import OrderDisplay from "./orderDisplay";
import OrderTotal from "./orderTotal";
import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(MENU);
    const [total, setTotal] = useState(0);
    const [orderList, setOrderList] = useState([]);

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

    const removeSubTotal = (price) =>{
        setTotal(total - price);
    };

    const removeOrder = (name) => {
        const removeSelectedItem = [...orderList];
        const index = removeSelectedItem.findIndex(orderList => orderList.name === name);
        removeSelectedItem.splice(index, 1);
        setOrderList(removeSelectedItem);
    }


    const tacoSelection = menu.filter(menu => (
        menu.catagory === 'tacos'
    ));

    const tacoDisplay = tacoSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal} order={order} />
    ));

    const pizzaSelection = menu.filter(menu => (
        menu.catagory === 'pizza'
    ));

    const pizzaDisplay = pizzaSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal} order={order} />
    ));

    const sidesSelection = menu.filter(menu => (
        menu.catagory === 'sides'
    ));

    const sidesDisplay = sidesSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal} order={order} />
    ));

    const orderDisplay = orderList.map(item => (
        <OrderDisplay {...item} removeSubTotal={removeSubTotal} removeOrder={removeOrder}/>
    ));

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='restaurantsDisplay col'>Hook My Food Cafe</div>
                    <div>
                        {orderDisplay}
                        <OrderTotal total={total} />
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
        </>
    );
}

export default HookMyFood;