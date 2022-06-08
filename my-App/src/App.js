import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Cart from './Componentes/Cart/Cart';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


const App = () => {
 
  
  
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos"/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
