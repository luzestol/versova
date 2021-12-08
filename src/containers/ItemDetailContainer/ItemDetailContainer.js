import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore"; 

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);
    const { itemId } = useParams();
    //console.log(itemId);


    useEffect(() => {
    
    // PARA TRAER SOLO UN ELEMENTO DE LA COLLECTION

    const database = getFirestore();
    console.log(database);

    const itemRef = doc(database, "items", itemId) ;
    getDoc(itemRef).then(snapshot => {
      
      if (snapshot.exists()) {
        const item = snapshot.data();
        console.log(item);
        setItemDetail(item); 
        
      }

    });


    }, [itemId]);
    
    return (
        <div className="wrapper">  
            { itemDetail ?  <ItemDetail details={itemDetail}  /> : "Loading..." }   
        </div>
    )
}