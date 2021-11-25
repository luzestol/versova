import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart ] = useState([]);

    // AGREGAR ITEM
    const addItem = (item, quantity) => {

        //console.log(item);
        //console.log(quantity);

        const addedItem = {...item, count: quantity };
        const isInCart = cart.some((product) => product.id === item.id);
        if (!isInCart) {
            setCart([...cart, addedItem]);
        }

        console.log("Item added to cart");
        console.log(cart);

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
        <CartContext.Provider value={{ addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )

}