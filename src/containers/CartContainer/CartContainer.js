import "./CartContainer.css"
import { Cart } from '../../components/Cart/Cart';
import { Forms } from '../../components/Forms/Forms';
import { useCartContext } from '../../contexts/CartContext/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export const CartContainer = () => {

    const { cart, totalPrice } = useCartContext();
    console.log(useCartContext());
    console.log(cart);

    const sendOrder = () => {

        const order = {
            buyer: { name: "Luz", phone: "11", email: "@gmail.com"},
            items: [{name: "Test", price: 100}] ,
            total: 100
        };

        const database = getFirestore();
        const ordersCollection = collection(database, "orders");

        addDoc(ordersCollection, order).then(({ id }) => 
        console.log("Nuevo producto agregado. Id: " + id));

    };

    



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

            {
                <Forms totalPrice={totalPrice} sendOrder={sendOrder} />
            }
        </>

        
        
    )
}