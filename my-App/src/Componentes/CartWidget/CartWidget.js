import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    const cantidad = totalCantidad()
    return (
        <button to='/cart' className="button">
            <img src='../imagenes/carrito.svg' alt='cart-widget'/> 
            {cantidad}
        </button>
    )
}

export default CartWidget