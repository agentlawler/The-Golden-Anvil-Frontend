import LoginContext from './LoginContext'
import { Route,Routes } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemPage from './ItemPage'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'



const Home = () => {

    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items" element={<ItemPage/>}/>
                <Route path='/items/:id' element={<ItemDetail/>}/>
            </Routes>
        </div>
    )

}
export default Home