import { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';

export const ItemDetail = ({name, price, pictureUrl, description}) => {

    const initial = 1;

    const [count, setCount] = useState(initial);

    const stock = 10;

    const onAdd = () => {
        if (count < stock) setCount(count + 1);
    }

    const onRemove = () => {
        if (count > 0) setCount(count - 1);
        //console.log("onRemove" + count);
    }

    return (
        <div className="itemdetail-wrapper">
            <div className="item-image">
                <img alt="" src={pictureUrl}></img>
            </div>
            <div className="item-info">
                <h2> {name} </h2>
                <h3> ${price} </h3>
                <p> {description} </p>
                <ItemCount stock={stock} initial={count} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    )
}