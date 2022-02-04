import { useState } from "react";
import MenuList from "./menuList";
import Order from "./order";
import OrderTotal from "./orderTotal";
import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(MENU);
    const [total, setTotal] = useState(0);

    const subTotal = (price) => {
        setTotal(total + price);
    }

    const tacoSelection = menu.filter(menu => (
        menu.catagory === 'tacos'
    ));

    const tacoDisplay = tacoSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal} />
    ));

    const pizzaSelection = menu.filter(menu => (
        menu.catagory === 'pizza'
    ));

    const pizzaDisplay = pizzaSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal}/>
    ));

    const sidesSelection = menu.filter(menu => (
        menu.catagory === 'sides'
    ));

    const sidesDisplay = sidesSelection.map(menu => (
        <MenuList {...menu} subTotal={subTotal}/>
    ));

    return (
        <>
        <div className="container">
            <div className='row'>
                <div className='restaurantsDisplay col'>Hook My Food Cafe</div>
                <div>
                    <Order/>
                    <OrderTotal total={total}/>
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