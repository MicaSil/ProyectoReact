import { Link } from 'react-router-dom'
import '../Item/Item.css'
const Item = ({id, img, name, precio, handLePage}) => {
    return (
        <div className="card">
                <div className="card-logo">
                    <img src={img} alt="img" width='100' />
                </div>
                <div className="card-content">
                    <h1>{name}</h1>  
                    <p>Precio: ${precio}</p>
                    <Link to={`/detail/${id}`} >Detalle</Link>
                </div>
            </div>
    )
}


export default Item