import { Link } from 'react-router-dom'
import '../Item/Item.css'
const Item = ({id, img, name, precio}) => {
    return (
        <div className="container">
                <div className="card">
                    <img src={img} alt="img"/>
                    <h1>{name}</h1> 
                    <p>Precio: ${precio}</p>
                    <Link to={`/detail/${id}`} >Detalle</Link>
                </div>
        </div>
    )
}


export default Item