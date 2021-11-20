import { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';

export const ItemDetail = (props) => {

    console.log(props);

    const initial = 1;

    const [count, setCount] = useState(initial);

    const stock = 10;

    const onAdd = () => {
        if (count < stock) setCount(count + 1);
    }

    const onRemove = () => {
        if (count > 1) setCount(count - 1);
        //console.log("onRemove" + count);
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
                <ItemCount stock={stock} initial={count} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    )
}