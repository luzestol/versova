import "./Cart.css";

export const Cart = (props) => {
    
    return (
        <>
            <div className="cart-wrapper">
                <div className="cart-image">
                    <img alt="" src={props.itemCart.pictureUrl}></img>
                </div>
                <div className="cart-info">
                    <h2>{props.itemCart.name}</h2>
                    <h3>${props.itemCart.price}</h3> 
                    <h3>Cantidad: {props.itemCart.count}</h3> 
                </div>
                <div className="cart-controls">
                    <button>Eliminar</button> 
                </div>
            </div>
        </>
    )
}