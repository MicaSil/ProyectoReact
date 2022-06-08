import {useState, createContext} from "react"


const CartContext = createContext()

    export const CartContextProvider = ({children}) => {
        const [cart, setCart] = useState([])

    const agregoItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const totalCantidad = () => {
        let cont = 0
        cart.forEach(prod =>{
        cont += prod.cantidad
        })
        return cont
    }

    const productosCantidad = (id) => {
        const prod = cart.find(prod => prod.id === id)

        return prod ? prod.cantidad : 0
    }
    return(
        <CartContext.Provider value={{cart, agregoItem, totalCantidad, productosCantidad}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
