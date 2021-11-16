export function ItemCount (props) {
    
    return (
        <div className="counter-wrapper">
            <div className="counter">
                <button onClick={props.onRemove} className="button-tertiary">-</button>
                <span> {props.initial} </span>
                <button onClick={props.onAdd} className="button-tertiary">+</button>
            </div>
            <button>Agregar al carrito</button>
            <span className="stock">{props.stock} disponibles</span>
        </div>
    )
}
