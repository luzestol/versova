import './ItemList.css';
import {productsData} from '../../productsData/productsData.js';
import {Item} from '../Item/Item';
import { useEffect, useState } from 'react';

export const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promiseItemList = new Promise ((resolve,reject) => {

        setTimeout(() => {
            resolve(productsData,0);
        }, 2000)
  
    });

    promiseItemList.then(
        (result) => {
            console.log(result);
            setProducts(result);
        }, (err) => {
            console.log(err);
        }
    )
    .catch((err) => {
        console.log(err);
    });

    }, []);
    
    

    return (
        <>
            {
                products ? products.map((product) => {
                    return (
                        <Item key={product.id} name={product.name} price={product.price} pictureUrl={product.pictureUrl} />
                    );
                }) : <h1>Loading...</h1>
            }
            
        </>
    )
}