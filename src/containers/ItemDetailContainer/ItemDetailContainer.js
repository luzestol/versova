import {productsData} from '../../productsData/productsData.js';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail.js';

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null);

    function getItem(item) {
        const promise = new Promise ((resolve,reject) => {

            setTimeout(() => {
                resolve(item);
            }, 2000)
      
        });

        promise.then(
            (result) => {
                console.log(result);
                setDetail(result);
            }, (err) => {
                console.log(err);
            }
        )
        .catch((err) => {
            console.log(err);
        });

    }

    useEffect(() => {
        getItem(productsData[0]); 
    }, []);
    
    

    return (
        <>  
            { detail ?  <ItemDetail name={detail.name} pictureUrl={detail.pictureUrl} price={detail.price} description={detail.description}  /> : "Loading..." }   
        </>
    )
}