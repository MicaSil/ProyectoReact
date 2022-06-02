import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div className="contenedor">
            <nav className="navBar">
                <Link to='/'>
                <h1 className="logo">INFINITE</h1>
                </Link>
                <ul>
                <Link to="/category/Damas" className="nav"><li>Damas</li></Link>
                <Link to="/category/Hombres" className="nav"><li>Hombres</li></Link>
                <Link to="/category/Niños" className="nav"><li>Niños</li></Link>
                </ul>
                <CartWidget className="carrito"/>
            </nav>
            
        </div>
    )
}

export default NavBar