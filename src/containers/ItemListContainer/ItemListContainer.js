import './ItemListContainer.css';
import '../../components/ItemCount/ItemCount.css';
import { ItemList } from '../../components/ItemList/ItemList';
import {productsData} from '../../productsData/productsData.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function ItemListContainer () {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const promiseItemList = new Promise ((resolve,reject) => {

        setTimeout(() => {
            resolve(productsData);
        }, 2000)
  
    });

    promiseItemList.then(
        (result) => {
            //console.log(result);
            if(categoryId) {
                const products = result.filter((products) => products.category === categoryId);
                //console.log(categoryId);
                setProducts(products);
                //console.log(products);
            } else {
                setProducts(result);
            }
             
        }, (err) => {
            //console.log(err);
        }
    )
    .catch((err) => {
        //console.log(err);
    });

    }, [categoryId]);

    return (
        <div className="wrapper flex-row">
            <ItemList products={products} />
        </div>
        
    )

}


