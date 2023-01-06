import axios from "axios"
import { useLocation } from "react-router-dom"

const Cart = () => {

    const location = useLocation()
    const item = location.state.item
    console.log(item)

    return (
        <>
        
        </>
    )

}
export default Cart