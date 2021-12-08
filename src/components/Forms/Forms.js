import './Forms.css';

export const Forms = (props) => {
    return (
        <div className="forms-wrapper">
            <div className="forms">
                <div className="form">
                    <span>Total: ${props.totalPrice} </span>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name"></input>
                    <label for="phone">Celular</label>
                    <input type="number" id="phone" name="phone"></input>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"></input>
                    <button href="" onClick={ props.sendOrder} className="button-primary" >Iniciar Compra</button>
                </div>
            </div>
        </div>
    )
}