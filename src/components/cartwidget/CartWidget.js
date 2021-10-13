import './CartWidget.css';
import cart from '../../img/cart.svg'

export const CartWidget = () => {
    return (
        <>
            <a className="cart-widget">
                <img src={cart} ></img>
            </a>
        
        </>
    )
}