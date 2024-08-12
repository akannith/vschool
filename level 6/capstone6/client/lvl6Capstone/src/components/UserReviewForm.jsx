import { useState, useContext } from "react"
import {UserContext} from "../context/UserProvider"

export default function UserReviewForm(props){

    const {addReview} = useContext(UserContext)
    const initState = { text: ''}

        const [userReviewFormData, setUserReviewFormData] = useState(initState)

function handleChange(e){
    const {name, value}= e.target
    setUserReviewFormData(prevData => {
        return {
            ...prevData,
            [name]: value
        }
    })
}

function handleSubmit(e) {
    e.preventDefault()
    addReview(userReviewFormData, props.itemId)
    setUserReviewFormData(initState)
}




return(
    <form onSubmit={handleSubmit}>

        <input
            name="text"
            value={userReviewFormData.text}
            placeholder="Add your reviews!"
            onChange={handleChange}
        />
        <button> Submit</button>
    </form>
)
}