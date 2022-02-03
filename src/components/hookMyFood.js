import { useState } from "react";
import MenuList from "./menuList";
import Order from "./order";
import SubTotal from "./subTotal";
import 'bootstrap/dist/css/bootstrap.min.css'; //import row
import MENU from "./menuItems";

function HookMyFood() {
    return (
        <>
            <div className='row'>
                <div className='menuHead col'>Hook My Food Cafe</div>
                <div>
                    <button className='subTotal col'>Order</button>
                    <Order />
                    <SubTotal />
                </div>
                <div className='menuList col'>
                    <MenuList />
                </div>
            </div>
        </>
    );
}

export default HookMyFood;