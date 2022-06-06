import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailcontainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos a nuestra tienda online"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos"/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
