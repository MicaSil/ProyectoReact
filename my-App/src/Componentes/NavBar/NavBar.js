import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div className="contenedor">
            <nav>
                <h1 className="logo">REGALA<span>ME</span></h1>                <ul>
                <Link to="/category/Damas"><li className="">Damas</li></Link>
                <Link to="/category/Hombres"><li className="">Hombres</li></Link>
                <Link to="/category/Niños"><li className="">Niños</li></Link>
                <Link to="/contacto"><li className="">Contactos</li></Link>
                </ul>
                <CartWidget className="carrito"/>
                <button className="button">Log in</button>
            </nav>
        </div>
    )
}

export default NavBar