
import './App.css';
import { Route,Routes } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import ItemDetail from './components/ItemDetail'
import ItemPage from './pages/ItemPage'
import CreateItem from './components/CreateItem';
import Cart from './components/Cart';


function App() {

 
  return (
    <div className="App">
      
      
      <div className='appHeader'>
        <Header/>
      </div>

      <Container>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}

          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/logout' element={ <Logout /> } />
          
          <Route path="/items" element={<ItemPage/>}/>
          <Route path='/items/:id' element={<ItemDetail/>}/>
          <Route path='/additem' element={<CreateItem/>} />

          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Container>

      <div className='appFooter'>
        <Footer />
      </div>

      
    </div>
  );
}

export default App;
