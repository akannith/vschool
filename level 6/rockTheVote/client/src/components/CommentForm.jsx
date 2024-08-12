import { useState, useContext } from "react"
import {UserContext} from "../context/UserProvider"

export default function CommentForm(props){

    const {addComment} = useContext(UserContext)

    const initState = { text: ''}


     const [commentFormData, setCommentFormData] = useState (initState)


 function handleChange(e){
    const {name, value}= e.target
    setCommentFormData(prevData => {
        return{
            ...prevData,
            [name]: value
        }
    })
}

function handleSubmit(e) {
    e.preventDefault()
    addComment(commentFormData, props.issueId)
    setCommentFormData(initState)
}

return(
    <form onSubmit={handleSubmit}>
        <input
            name="text"
            value={commentFormData.text}
            onChange={handleChange}
        />
        <button> Submit</button>
    </form>
)
}