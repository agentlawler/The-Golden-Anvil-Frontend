import LoginContext from './LoginContext'
import './App.css';

import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'


function App() {

  const [loginStatus, setLoginStatus] = useState(false)

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
