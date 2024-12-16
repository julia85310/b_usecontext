'use client';
import { createContext, useState } from "react";
const CartContext = createContext();

export default CartContext;

export function CartProvider({children}){

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (itemID) => {
        const newItems = items.filter((item) => {
            if(item.id != itemID){
                return item;
            }
        });
        setItems(newItems);
    };

    return (
        <CartContext.Provider value={{items, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}