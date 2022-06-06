import React, { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import  "./ItemListContainer.css"
import {getFecht, getFechtByCategory} from '../../asyncmock'



    const ItemListContainer = ({greeting}) => {
       
       
        const [productos, setProdcutos] = useState ([])
        
        const { categoryId } = useParams()
        console.log(categoryId)
        useEffect(() => {
            if(!categoryId){
                getFecht().then(response => {
                    setProdcutos(response)
                }) 
            } else {
                getFechtByCategory(categoryId).then(response => {
                    setProdcutos(response)
                })
            }
            
        }, [categoryId])

    

        return(
            <div>
                <h1 className="greetin">{greeting}</h1>
                {productos.length > 0 
                    ?<ItemList productos={productos}/>
                    :<h1>No hay stock</h1>
                }
                
            </div>
        )
    }      


export default ItemListContainer


