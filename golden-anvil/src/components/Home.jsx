import { Route,Routes } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import ItemPage from './ItemPage'



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