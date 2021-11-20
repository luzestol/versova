import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {

    return (
        <div className="item-wrapper">
            <div className="item">
                <img alt="" src={props.pictureUrl}></img>
                <h2> {props.name} </h2>
                <h3> ${props.price} </h3>
                <button className="button-secondary black"><Link to={`/itemdetail/${props.id}`}>Ver detalle</Link></button>
            </div>
        </div>
    )
}

