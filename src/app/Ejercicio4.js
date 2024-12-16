'use client';
import { createContext, useState } from "react";
const CartContext = createContext();

export default CartContext;

/*
item = {
    id: _, 
    nombre: _
}
*/


export function CartProvider({children}){

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        let yaExiste = false;
        const newItems = items.map(itemMap => {
            if(itemMap.id == item.id){
                yaExiste = true;
                return {...itemMap, cantidad: itemMap.cantidad + 1};
            }else{
                return itemMap;
            }
        });
        
        if (!yaExiste){
            setItems([...items, {...item, cantidad:1}]);
        }else{
            setItems(newItems);
        }
    };

    const removeItem = (item) => {
        let newItems;
        if (item.cantidad == 1){
            newItems = items.filter((itemFilter) => {
                if(itemFilter.id != item.id){
                    return itemFilter;
                }
            });
        }else{
            newItems = items.map((itemMap) => {
                if(itemMap.id != item.id){
                    return itemMap;
                }else{
                    return {...item, cantidad: item.cantidad - 1};
                }
            });
        }
        setItems(newItems);
    };

    return (
        <CartContext.Provider value={{items, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}