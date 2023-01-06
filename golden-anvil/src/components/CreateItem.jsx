import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateItem = () => {

    const navigate = useNavigate()

    const [newItem, setNewItem] = useState({
            name: '',
            rarity: '',
            type: '',
            description: '',
            price: '',
            attunement: '',
            image: '',
            userId: ''
    })

    const handleChange = (event) => {
        setNewItem({...newItem,[event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await axios.post(`http://localhost:3001/items`, {
            name: '',
            // rarity: '',
            // type: '',
            description: '',
            price: '',
            // attunement: '',
            image: '',
            userId: ''
        })
        
        setNewItem({
            name: '',
            // rarity: '',
            // type: '',
            description: '',
            price: '',
            // attunement: '',
            image: '',
            userId: ''
        })
        navigate('/items')
    }

    return (
        <div className="container">
            <h1 className="createItemTitle">Create an Item</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type='text' name='name' placeholder='Name' 
                        value={newItem.name} onChange={handleChange} />
                </label>
                {/* <label>
                    Rarity: 
                    <select value={newItem.rarity} onChange={handleChange}>
                        <option value="Coomon">Common</option>
                        <option value="Uncommon">Uncommon</option>
                        <option value="Rare">Rare</option>
                        <option value="Very Rare">Very Rare</option>
                        <option value="Legendary">Legendary</option>
                        <option value="Artifact">Artifact</option>
                        <option value="Unkown">Unknown</option>
                        <option value="Varies">Varies</option>
                    </select>
                </label> */}
                {/* <label>
                    Type:
                    <select value={newItem.type} onChange={handleChange}>
                        <option value="Weapon">Weapon</option>
                        <option value="Armor">Armor</option>
                        <option value="Woundrous Item">Wondrous Item</option>
                    </select>
                </label> */}
                <label>
                    Description:<textarea name='description' placeholder='Description' 
                        value={newItem.description} onChange={handleChange} />
                </label>
                <label>
                    Price: <input type='text' name='price' placeholder='Price' 
                        value={newItem.price} onChange={handleChange} />
                </label>
                <label>
                    Image Link: <input type='text' name='image' placeholder='Image' 
                        value={newItem.image} onChange={handleChange} />
                </label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
export default CreateItem