import { useState } from 'react';

export function ItemCount (props) {
    
    return (
        <div className="counter-wrapper">
            <div className="counter">
                <button onClick={props.onRemove} className="button-secondary">-</button>
                <span> {props.initial} </span>
                <button onClick={props.onAdd} className="button-secondary">+</button>
            </div>
            <button>Agregar al carrito</button>
            <span className="stock">{props.stock} disponibles</span>
        </div>
    )
}