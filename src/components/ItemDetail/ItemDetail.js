import { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';
import { useCartContext } from '../../contexts/CartContext/CartContext'

export const ItemDetail = (props) => {

    // CART CONTEXT 

    const { addItem } = useCartContext();
    

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

    const onAdd = (item, quantity) => {
        console.log("Sumaste " + quantity + " productos.");
        console.log(item); //este es el {objeto} del item que necesito
        addItem(item, quantity);
        setDisplay(false);
        
    }

    
    return (
        <div className="itemdetail-wrapper">
            <div className="item-image">
                <img alt="" src={props.details.pictureUrl}></img>
            </div>
            <div className="item-info">
                <h2> {props.details.name} </h2>
                <h3> ${props.details.price} </h3>
                <p> {props.details.description} </p>
                <ItemCount stock={stock} initial={count} count={count} item={props.details} add={add} remove={remove} onAdd={onAdd} display={display} />
                
            </div>
        </div>
    )
}