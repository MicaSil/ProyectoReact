import {useState, createContext} from "react"


const CartContext = createContext()

    export const CartContextProvider = ({children}) => {
        const [cart, setCart] = useState([])

    const agregoItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const cartNew = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const prodNew = {
                        ...prod, cantidad: prod
                    }
                }
            })
        }
        
    }

    const totalCantidad = () => {
        let cont = 0
        cart.forEach(prod =>{
        cont += prod.cantidad
        })
        return cont
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const productosCantidad = (id) => {
        const prod = cart.find(prod => prod.id === id)

        return prod ? prod.cantidad : 0
    }

    const borrarItem = (id) => {
        const cartNew  = cart.filter(prod => prod.id !== id)
        setCart(cartNew )
    }
    return(
        <CartContext.Provider value={{cart, agregoItem, totalCantidad, productosCantidad, borrarItem}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
