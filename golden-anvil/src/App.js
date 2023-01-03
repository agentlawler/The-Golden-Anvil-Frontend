import LoginContext from './LoginContext'
import './App.css';
import { Route,Routes } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import axiosInstance from './AxiosInstance'

import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import ItemDetail from './components/ItemDetail'
import ItemPage from './components/ItemPage'


function App() {

  const [loginStatus, setLoginStatus] = useState('unset')

  // useEffect(()=>{
  //   // IF localStorage data exists AND that data passes LoginTest(), 
  //   // THEN refresh login status and load data, e.g. yourFunctionToLoadDBData()
  //   const user_id = localStorage.getItem('user_id')
  //   const username = localStorage.getItem('username')
    
  //   if (user_id && username) {
  //     if(loginTest(username)) yourFunctionToLoadDBData() 
  //   } else setLoginStatus(false)
  // }, [loginStatus])


  // async function loginTest(username) {
  //   await axiosInstance.get(`users/${username}`)
  //   .then(res => {
  //     if (res.status === 200) {
  //       setLoginStatus(true)
  //       return true
  //     } else {
  //       setLoginStatus(false)
  //       return false
  //     }
  //   })
  //   .catch(error => {
  //     setLoginStatus(false)
  //     console.error()
  //   })
  // }

  return (
    <div className="App">
      <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
      
      <div className='appHeader'>
        <Nav/>
      </div>

      <div className='appMain'>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/logout' element={ <Logout /> } />
          
          <Route path="/items" element={<ItemPage/>}/>
          <Route path='/items/:id' element={<ItemDetail/>}/>
        </Routes>
      </div>

      <div className='appFooter'>
        <Footer />
      </div>

      </LoginContext.Provider>
    </div>
  );
}

export default App;
