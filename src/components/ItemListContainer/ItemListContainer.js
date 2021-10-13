import './ItemListContainer.css';

export const ItemListContainer = (props) => {

    return (
        <div className="greeting-wrapper">
            <p> {props.greeting} </p>
        </div>
    )
}