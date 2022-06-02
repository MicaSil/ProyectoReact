// import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getFechtById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const {productId} = useParams()

    useEffect(() => {
        getFechtById(productId).then(response => {
            setProducto(response)
        })
    }, [])

    return(
        <div className="ItemdetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer