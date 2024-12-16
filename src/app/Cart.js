import CartContext from "./Ejercicio4";
import { useContext } from "react";
export default function Cart(){
    const {items, removeItem} = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compra</h2>
            <ul>
                {items.map( item =>{
                    return <li key={item.id}>
                        {item.nombre} Cantidad: {item.cantidad} 
                        <button onClick={() => removeItem(item)}>
                            Eliminar
                        </button>
                    </li>
                })}
            </ul>
        </div>
    );
}