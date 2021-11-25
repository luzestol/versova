import { Link } from "react-router-dom"

export function ItemCount ({stock, initial, count, item, add, remove, onAdd, display }) {
    
    return (
        <> 
        { display && 
            <div className="counter-wrapper">
                <div className="counter">
                    <button onClick={remove} className="button-tertiary">-</button>
                    <span> {initial} </span>
                    <button onClick={add} className="button-tertiary">+</button>
                </div>
                <button onClick={() => {onAdd(item, count)}} >Agregar al carrito</button>
                <span className="span">{stock} disponibles</span>
            </div>
        }

        { !display &&
            <div className="counter-wrapper">
                <span className="span">Agregaste {count} productos. </span>
                <button className="button-primary" ><Link to={`/cart`} >Ir al carrito </Link></button>
                <button className="button-tertiary"><Link to={`/`}> Regresar al Home</Link></button>
            </div>  
        }
        </>
    )
}
