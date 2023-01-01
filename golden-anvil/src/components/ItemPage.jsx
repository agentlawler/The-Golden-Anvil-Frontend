import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ItemPage = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const response = await axios.get("http://localhost:8000/ganvil/items/")
            setItems(response.data)
            console.log(response.data)
        }
        getItems()
    }, [])

    return items ? (
        <div className="itemContainer">
            
            <div className="itemBox">
                {items.map((item) => (
                    <div style ={{backgroundImage: `url(${item.image})`}} className='itemCard' key={item.id}>
                    <Link to={`/items/${item.id}`}>
                        <div className='itemInfo'>
                            <h3>{item.name}</h3>
                            <h4>{item.type}</h4>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <h1> Loading Please Wait </h1>
    )
}

export default ItemPage