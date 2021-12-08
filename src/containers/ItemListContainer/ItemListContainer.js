import './ItemListContainer.css';
import '../../components/ItemCount/ItemCount.css';
import { Header } from '../../components/Header/Header';
import { ItemList } from '../../components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { where, query } from "firebase/firestore"; 


export function ItemListContainer () {

    const [products, setProducts] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {

    const database = getFirestore();
    //console.log(database);

    if(categoryId) {

    // TRAER LOS ITEMS SEGÚN CATEGORÍA

    const q = query(collection(database, "items"), where("category", "==", categoryId));

    getDocs(q).then((snapshot) => {
        const itemsByCategory = snapshot.docs.map((doc) => doc.data());
        console.log();
        setProducts(itemsByCategory);
    });
        
    } else {

    // TRAER TODOS LOS ITEMS DE LA COLLECTION

    getDocs(collection(database, "items")).then((snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      console.log(items);
      setProducts(items);
    });
        
    }
        

    }, [categoryId]);

    return (
        <>
            <Header />
            { categoryId ? <h2>{categoryId}</h2> : <h2>PRODUCTOS</h2> }
            
            <div className="wrapper flex-row"> 
               { products ? <ItemList products={products} /> : "Loading..." }
            </div>
        </>
        
    )

}


