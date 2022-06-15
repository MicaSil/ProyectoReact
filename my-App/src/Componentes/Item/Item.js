import { Link } from 'react-router-dom'
import '../Item/Item.css'
const Item = ({id, img, name, precio}) => {
    return (
        <div className="container">
                <div className="card">
                    <img src={img} alt="img" className="card_img"/>
                    <div className="card_body">
                        <h3 className="card_title">{name}</h3> 
                        <p className="card_precios">Precio: ${precio}</p>
                        <Link to={`/detail/${id}`}> <button className="card_btn">Detalle </button> </Link>
                    </div>
                </div>
        </div>
    )
}


export default Item