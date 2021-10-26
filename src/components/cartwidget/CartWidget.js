import './CartWidget.css';
import cart from '../../img/cart.svg'

export const CartWidget = () => {
    return (
        <>
            <a href="/#" className="cart-widget">
                <img alt="" src={cart} ></img>
            </a>
        
        </>
    )
}