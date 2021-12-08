import './App.css';

import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import { NavBar } from './components/NavBar/NavBar.js';
import { Footer } from './components/Footer/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider} from './contexts/CartContext/CartContext';
/*
import { useEffect } from 'react';
import { getFirestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, where, query } from "firebase/firestore";*/

function App() {

  /*useEffect(() => {

    // PARA TRAER SOLO UN ELEMENTO DE LA COLLECTION

    const database = getFirestore();
    console.log(database);

    const stickerRef = doc(database, "items", "cxknov82wGquP1ksAlSq") ;
    getDoc(stickerRef).then(snapshot => {
      
      if (snapshot.exists()) {
        console.log(snapshot.data());
        
      }

    });

  }, [])*/

  /*useEffect(() => {

    // PARA TRAER TODOS LOS ELEMENTOS DE LA COLECTION

    const database = getFirestore();
    console.log(database);

    getDocs(collection(database, "items")).then((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });



  }, [])*/

  /*useEffect(() => {

    // PARA TRAER TODOS LOS ELEMENTOS DE LA COLECTION con un filtro y límite

    const database = getFirestore();
    console.log(database);

    const q = query(collection(database, "items"), where("price", ">", 100));

    getDocs(q).then((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });



  }, [])*/

  /*const sendOrder = () => {

    const order = {
      buyer: { name: "Luz", phone: "11", email: "@gmail.com"},
      items: [{ name: "Sticker", price: 60}],
      total: 1
    };

    const database = getFirestore();

    //AGREGAR UN DOCUMENTO A UNA COLLECTION
    const ordersCollection = collection(database, "orders");



  }*/

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/itemdetail/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartContainer />} />
          <Route path="/*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
