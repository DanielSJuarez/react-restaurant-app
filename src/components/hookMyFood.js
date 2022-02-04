import { useState } from "react";
import MenuList from "./menuList";
import Order from "./order";
import SubTotal from "./subTotal";
import MENU from "./menuItems";

function HookMyFood(props) {
    const [menu, setMenu] = useState(MENU);

    const tacoSelection = menu.filter(menu => (
        menu.catagory === 'tacos'
    ));

    const tacoDisplay = tacoSelection.map(menu => (
        <MenuList {...menu}/>
    ));

    const pizzaSelection = menu.filter(menu => (
        menu.catagory === 'pizza'
    ));

    const pizzaDisplay = pizzaSelection.map(menu => (
        <MenuList {...menu}/>
    ));

    const sidesSelection = menu.filter(menu => (
        menu.catagory === 'sides'
    ));

    const sidesDisplay = sidesSelection.map(menu => (
        <MenuList {...menu}/>
    ));

    // const menuDisplay = menu.map(menu => (
    //     <MenuList {...menu}/>
    // ))

    return (
        <>
        <div className="container">
            <div className='row'>
                <div className='menuHead col'>Hook My Food Cafe</div>
                <div>
                    <button className='subTotal col'>Order</button>
                    <Order />
                    <SubTotal />
                </div>
                <div className='menuList col'>
                    <section>
                        <p>Tacos</p>
                        {tacoDisplay}
                    </section>
                    <section>
                        <p>Pizza</p>
                        {pizzaDisplay}
                        
                    </section>
                    <section>
                        <p>Sides</p>
                        {sidesDisplay}      
                    </section>
                    {/* {menuDisplay} */}
                </div>
            </div>
            </div>
        </>
    );
}

export default HookMyFood;