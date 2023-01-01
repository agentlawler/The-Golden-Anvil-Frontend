import { Route,Routes } from 'react-router-dom'



const Home = () => {

    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<Home/>}/>
                
            </Routes>
        </div>
    )

}
export default Home