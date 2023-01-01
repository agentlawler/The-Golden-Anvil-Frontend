import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetail = () => {

    const { id } = useParams()
    const [item, setItem] = useState([])
    
    useEffect(() => {
        const getItem = async () => {
            const response = await axios.get(`http://localhost:8000/ganvil/items/${id}`)
            setItem(response.data)
        }
        getItem()
    }, [])

    return item ? (
        <div className="conatiner">
            <div className="itemDetail">
                <div className="itemDetailContainer">
                    <div className="itemDetailImage">
                        <img src={item.image} alt={item.name} height='200px'/>
                    </div>
                    <div className="itemDetailInfo">
                        <h1>{item.name}</h1>
                        <br></br>
                        <h3>{item.rarity}</h3>
                        <h3>{item.type}</h3>
                        <br></br>
                        <p>{item.description}</p>
                        <br></br>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    ) : ( 
    <h1>Loading Please Wait</h1>
    )
}
export default ItemDetail