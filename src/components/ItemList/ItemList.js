import './ItemList.css';

import {Item} from '../Item/Item';


export const ItemList = (props) => {

    return (
        <>
            {
                props.products ? props.products.map((product) => {
                    return (
                        <Item key={product.id} id={product.id} name={product.name} price={product.price} pictureUrl={product.pictureUrl} />
                    );
                }) : <h1>Loading...</h1>
            }
            
        </>
    )
}