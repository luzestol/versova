import { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';

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

    const onAdd = (count) => {
        console.log("Sumaste " + count + " productos.");
        setDisplay(false);
        //console.log(count);

        // desmontar el carrito
        // desactivar funciones del carrito
        // montar otro return, con boton con link a /cart
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
                <ItemCount stock={stock} initial={count} count={count} add={add} remove={remove} onAdd={onAdd} display={display} />
                
            </div>
        </div>
    )
}