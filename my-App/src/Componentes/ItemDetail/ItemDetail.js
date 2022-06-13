import { useContext, useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/CartContext"
import { useNotificacion } from "../../Notificacion/Notificacion"




const ItemDetail = ({ id, img, name, stock, precio, descripcion, category}) => {

    const [cantidad, setCantidad] = useState(0)
        
    const {agregoItem, productosCantidad} = useContext(CartContext)

    const initialValue = productosCantidad(id)

    const {setNotificacion} = useNotificacion()
        

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        setNotificacion('sucesos', 'Se añadió correctamente al carrito')
        agregoItem({id, name, precio, cantidad})
        
    }
    return(
        <div>
            <h1>Detalle</h1>

            <div className="card">
                <div className="card-logo">
                    <img src={img} alt="img" width='100' />
                </div>
                <div className="card-content">
                    <h1>{name}</h1>  
                    <p>Precio: ${precio}</p>
                    <p>Descripcion: {descripcion}</p>
                    <p>Categoria: {category}</p>
                    <p>Stock: {stock}</p>
                </div>
                <footer>
                {cantidad > 0 
                ? <Link to= '/cart'><button> Finalizar Compra </button></Link> 
                : <ItemCount stock = {10} initial = {initialValue} onAdd = {onAdd} /> }
                </footer>
            </div>  
            
        </div>
    )
}

export default ItemDetail