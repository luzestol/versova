import "./CartContainer.css"
import { Cart } from '../../components/Cart/Cart';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';

export const CartContainer = () => {

    const { cart, totalPrice } = useCartContext();
    console.log(useCartContext());
    console.log(cart);

    return (
        <>
            { 
                cart.length !== 0 ? cart.map((itemCart) => {
                    return (
                        
                        <div className="wrapper">   
                            <Cart key={itemCart.id} itemCart={itemCart} />
                        </div>
                         
                    );
                }) : 
                    <div className="wrapper flex flex-column">
                        <h2 className="h2">No tenés nada en el carrito 😢 </h2>
                        <Link to={`/`}><button>¡Ir a comprar!</button></Link>
                    </div>
                      
            }
        </>

        
        
    )
}