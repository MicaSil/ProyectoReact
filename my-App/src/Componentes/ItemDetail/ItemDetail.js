import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({img, name, stock, precio, descripcion, category}) => {
    return(
        <>
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
                </div>
                <footer>
                    <ItemCount />
                </footer>
            </div>  
            
        </>
    )
}

export default ItemDetail