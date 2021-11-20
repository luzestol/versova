import {productsData} from '../../productsData/productsData.js';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);
    const { itemId } = useParams();
    //console.log(itemId);

    function getItem(item) {
        const promise = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(item);
            }, 2000)
      
        });

        promise.then(
            (result) => {
                //console.log(result);
                const product = result.find((product) => product.id === parseInt(itemId));
                setItemDetail(product);
                //console.log(product);
                
                //console.log(itemDetail);
            }, (err) => {
                //console.log(err);
            }
        )
        .catch((err) => {
            //console.log(err);
        });

    }

    useEffect(() => {
        getItem(productsData);
    }, [itemId]);
    
    return (
        <div className="wrapper">  
            { itemDetail ?  <ItemDetail details={itemDetail}  /> : "Loading..." }   
        </div>
    )
}