import { useState, useContext } from "react"
import {UserContext} from "../context/UserProvider"

export default function ItemForm() {
    const {addItem} = useContext(UserContext)

    const initState = {
        name: '',
        description: '',
        price: '',
        imgUrl: ''
    }

    const [itemFormData, setItemFormData] = useState(initState)

    function handleChange(e){
        const {name, value}= e.target
        setItemFormData(prevData => {
            return{
            ...prevData,
            [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addItem(itemFormData)
        setItemFormData(initState)
    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
            name="name"
            value={itemFormData.name}
            placeholder="Name"
            onChange={handleChange}
            />

            <input 
            name="description"
            value={itemFormData.description}
            placeholder="About Item"
            onChange={handleChange}
            />

            <input 
            name="price"
            value={itemFormData.price}
            placeholder="Price"
            onChange={handleChange}
            />  

            <input 
            name="imgUrl"
            value={itemFormData.imgUrl}
            placeholder="image URL"
            onChange={handleChange}
            />

            <button> Submit</button>
        </form>

        
    )
}

