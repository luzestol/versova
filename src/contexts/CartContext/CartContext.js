import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart ] = useState([]);

    // AGREGAR ITEM
    const addItem = (item) => {
        // {item} es el objeto que exporto desde el itemCount
        setCart([...cart, item]);
        console.log("Me agrega un objeto al array");
    }

    // REMOVER ITEM
    const removeItem = (item) => {
        // remover el {item} del array por su id
        // setear el array
        console.log("Me remueve un objeto del array");
    }

    // CLEAR CART
    const clear = (cart) => {
        // clear [cart]
        console.log("Clears cart");
    }

    // CONDICIONAL IS IN CART? evita duplicados, por id
    const isInCart = (itemId) => {
        console.log("Chequea si hay duplicados");
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}