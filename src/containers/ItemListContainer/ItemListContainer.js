import './ItemListContainer.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';
import { Item } from '../../components/Item/Item'
import { useState } from 'react';


export function ItemListContainer () {

    //const initial = 0;
    //const stock = 0;

    const [count, setCount] = useState(initial);

    const onAdd = () => {
        if (count < stock) setCount(count + 1);
        console.log('onAdd' + count);
    }

    const onRemove = () => {
        if (count > 1) setCount(count - 1);
        console.log("onRemove" + count);
    }

    return (
        <div>
            <div className="wrapper">
                <ItemCount stock="7" initial="5" onAdd={onAdd} onRemove={onRemove} />
            </div>
            <div>
                <Item />
            </div>
        </div>
        
    )

}


