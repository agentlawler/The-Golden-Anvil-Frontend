import React from "react"
import axios from "axios"
import { useState } from "react"
import { Button } from "bootstrap"

const CreateItem = () => {

    

    // const [newItem, setNewItem] = useState({
    //     itemId: item.id,
    //     userId: user.Id,
    //     newItem: ''
    // })

    // const handleChange = (event) => {
    //     setNewItem({...newItem,[event.target.id]: event.target.value})
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()

    //     await axios.post(`http://localhost:3001/items/${item.id}`, newItem)
    //     return newItem.data
    // }

    return (
        <div className="createItemFormDiv">
            <h1 className="createItemTitle">Create an Item</h1>
            {/* <form onSubmit={handleSubmit}>
                <input
                    className= "createItemInput"
                    id="item"
                    type="text"
                    placeholder="Create An Item"
                    autoComplete="off"
                    onChange={handleChange}
                    value={item[""]}
                />
                <Button type="submit" onClick={(() => navigate("/items"))}> CREATE </Button>
            </form> */}
        </div>
    )
}
export default CreateItem