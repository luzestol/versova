import './Item.css';

export const Item = ({name, price, pictureUrl}) => {

    return (
        <div className="item-wrapper">
            <div className="item">
                <img alt="" src={pictureUrl}></img>
                <h2> {name} </h2>
                <h3> ${price} </h3>
                <button className="button-secondary black">Ver detalle</button>
            </div>
        </div>
    )
}

