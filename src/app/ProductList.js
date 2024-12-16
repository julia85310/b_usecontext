import CartContext from "./Ejercicio4";
import { useContext } from "react";

const itemsStore = [
    {
        id:1,
        nombre: 'Esponja'
    },
    {
        id:2,
        nombre: 'Fairy'
    },
    {
        id:3,
        nombre: 'Lejía'
    },
    {
        id:4,
        nombre: 'Amoniaco'
    },
    {
        id:5,
        nombre: 'Nanas'
    },
    {
        id:6,
        nombre: 'Agerul'
    },
    {
        id:7,
        nombre: 'Oxígeno Activo'
    },
];

export default function ProductList(){
    const {addItem} = useContext(CartContext);

    return(<div>
        <h2>Productos disponibles</h2>
            <ul>
                {itemsStore.map( item =>{
                    return <li key={item.id}>
                        {item.nombre}
                        <button onClick={() => addItem(item)}>
                            Agregar al carrito
                        </button>
                    </li>
                })}
            </ul>
        </div>
    );
}