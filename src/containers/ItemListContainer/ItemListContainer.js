import './ItemListContainer.css';
import '../../components/ItemCount/ItemCount.css';
import { ItemList } from '../../components/ItemList/ItemList'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';



export function ItemListContainer () {

    return (
        <div>
            <div className="wrapper flex-row">
                <ItemList />
            </div>
            <div className="wrapper flex-column">
                <ItemDetailContainer />
            </div>
        </div>
        
    )

}


