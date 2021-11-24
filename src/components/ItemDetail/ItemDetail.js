import { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';
import { useCartContext } from '../../contexts/CartContext/CartContext'

export const ItemDetail = (props) => {

    // LÓGICA ITEM COUNT

    const initial = 1;

    const [count, setCount] = useState(initial);

    const stock = props.details.stock;

    const add = () => {
        if (count < stock) setCount(count + 1);    
    }               

    const remove = () => {
        if (count > 1) setCount(count - 1);
    }

    //LÓGICA DISPLAY ITEM COUNT

    const [display, setDisplay] = useState(true);
    

    // FUNCIÓN ONADD

    const onAdd = (count) => {
        console.log("Sumaste " + count + " productos.");
        console.log(props.details); //este es el {objeto} del item que necesito
        setDisplay(false);
        
    }

    // CART CONTEXT 

    const { addItem, removeItem, clear, isInCart } = useCartContext();


    return (
        <div className="itemdetail-wrapper">
            <div className="item-image">
                <img alt="" src={props.details.pictureUrl}></img>
            </div>
            <div className="item-info">
                <h2> {props.details.name} </h2>
                <h3> ${props.details.price} </h3>
                <p> {props.details.description} </p>
                <ItemCount stock={stock} initial={count} count={count} add={add} remove={remove} onAdd={onAdd} display={display} />
                
            </div>
        </div>
    )
}