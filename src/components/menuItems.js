import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const MENU = [{
    name: 'Spicy Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Chicken Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Beef Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Shimp Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Not A Chicken Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Not A Beef Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Not A Shrimp  Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Custom Taco',
    price: 6,
    id: uuidv4(),
    catagory: 'tacos',
    size: 'M',
},
{
    name: 'Cheese Pizza',
    price: 6,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Pepperoni Pizza',
    price: 7,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Pepperoni And Sausage Pizza',
    price: 8,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Supreme Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Hawaiian Pizza',
    price: 2,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Meat Lovers Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Custom One-Topping Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Custom Two-Topping Pizza',
    price: 12,
    id: uuidv4(),
    catagory: 'pizza',
    size: 'M',
},
{
    name: 'Fries',
    price: 3,
    id: uuidv4(),
    catagory: 'Sides',
    size: 'M',
},
{
    name: 'Chips',
    price: 2,
    id: uuidv4(),
    catagory: 'Sides',
    size: 'M',
},
{
    name: 'Cookie',
    price: 4,
    id: uuidv4(),
    catagory: 'Sides',
    size: 'M',
},
{
    name: 'Mac & Cheese',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    size: 'M',
},
{
    name: 'Fruit Cup',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    size: 'M',
},
{
    name: 'Garlic Bread Knots',
    price: 5,
    id: uuidv4(),
    catagory: 'sides',
    size: 'M',
},
{
    name: 'Nachos',
    price: 5,
    id: uuidv4(),
    catagory: 'sides',
    size: 'M',
},
{
    name: 'Brownie',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    size: 'M',
},
];

export default MENU;