import './ItemListContainer.css';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import '../../components/ItemCount/ItemCount.css';
import { Item } from '../../components/Item/Item'
import { useState } from 'react';


export function ItemListContainer () {

    const initial = 1;

    const [count, setCount] = useState(initial);

    const stock = 10;

    const onAdd = () => {
        if (count < stock) setCount(count + 1);
        console.log('onAdd' + count);
    }

    const onRemove = () => {
        if (count > 0) setCount(count - 1);
        //console.log("onRemove" + count);
    }

    return (
        <div>
            <div className="wrapper">
                <ItemCount stock={10} initial={count} onAdd={onAdd} onRemove={onRemove} />
            </div>
            <div>
                <Item />
            </div>
        </div>
        
    )

}


