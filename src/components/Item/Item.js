import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {

    return (
        <div className="item-wrapper">
            <div className="item">
                <img alt="" src={props.pictureUrl}></img>
                <h3> {props.name} </h3>
                <h4> ${props.price} </h4>
                <button className="button-secondary black"><Link to={`/itemdetail/${props.id}`}>Ver detalle</Link></button>
            </div>
        </div>
    )
}

