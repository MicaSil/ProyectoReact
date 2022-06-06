import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({img, name, stock, precio, descripcion, category}) => {
    const onAdd = (cantidad) => {
        console.log(`SE AÑADIO ${cantidad} PRODUCTOS AL CARRITO`)
    }
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
                    <p>Stock: {stock}</p>
                </div>
                <footer>
                <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
                </footer>
            </div>  
            
        </>
    )
}

export default ItemDetail