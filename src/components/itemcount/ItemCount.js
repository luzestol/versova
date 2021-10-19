import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = () => {

    const stock = 3;

    const [initial, setInitial] = useState(0);

    const add = () => {
        if (initial < stock) setInitial(initial + 1);
    }
    
    const remove = () => {
        if (initial > 0) setInitial(initial - 1);
    }
    

    return (
        <div className="counter-wrapper">
            <div className="counter">
                <button onClick={remove} className="button-secondary">-</button>
                <span> {initial} </span>
                <button onClick={add} className="button-secondary">+</button>
            </div>
            <button>Agregar al carrito</button>
            <span className="stock">{stock} disponibles</span>
        </div>
    )
}