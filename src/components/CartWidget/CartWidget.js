import './CartWidget.css';
import cart from '../../img/cart.svg';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext/CartContext';

export const CartWidget = (props) => {

    const { totalItems } = useCartContext();

    return (
        <>
            <Link to={`/cart`} > 
                <div className="flex items-center">
                    <img alt="" src={cart} ></img>
                    <span>{totalItems}</span>
                </div>
            </Link>
        
        </>
    )
}
