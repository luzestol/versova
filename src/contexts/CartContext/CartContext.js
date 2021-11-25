import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems ] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    

    // AGREGAR ITEM
    const addItem = (item, quantity) => {

        //console.log(item);
        //console.log(quantity);

        const addedItem = {...item, count: quantity };
        const isInCart = cart.some((product) => product.id === item.id);
        if (!isInCart) {
            setCart([...cart, addedItem]);
        }

        console.log("Item added to cart. Actual cart:");
        console.log(cart);

        setTotalItems(totalItems + 1);
        console.log("Total items: ");
        console.log(totalItems);

        setTotalPrice(totalPrice + item.price);

        return;

    }

    // REMOVER ITEM
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        console.log("Item removed from cart");
    }


    // CLEAR CART
    const clear = () => {
        setCart([]);
        console.log("Cart cleared");
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, cart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )

}