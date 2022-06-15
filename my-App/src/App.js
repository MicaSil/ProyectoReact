import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Cart from './Componentes/Cart/Cart';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificacionProvider } from './Notificacion/Notificacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Componentes/Slider/Slider'

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificacionProvider>
          <BrowserRouter>
            <NavBar />
            <Slider />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos"/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </NotificacionProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
