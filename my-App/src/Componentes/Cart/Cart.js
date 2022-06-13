import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './Cart.css'

const Cart = () => {

    const {cart} = useContext(CartContext) 
    return(
        <div>
            <h1 className="carritoTitle">Carrito</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div className="cart">
                            <div key={prod.id}>{prod.name}</div>
                            <div>Cantidad: {prod.cantidad}</div>
                            <div>Precio: ${prod.precio}</div>
                            <div>Total: ${prod.precio * prod.cantidad}</div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart