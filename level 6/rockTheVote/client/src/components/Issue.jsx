import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"



export default function Issue(props) {

    const {title, description, imgUrl, userId, username, _id, upvote, downvote} = props
    const {user, handleUpvote, handleDownvote} = useContext(UserContext)

    
    console.log("userId: ", userId)
    console.log("user._id: ", user._id)
    
    let isUser = userId === user._id

    return (
        <>
        <div>
            <h1>{username}</h1>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src= {imgUrl} style={{height: "100px", width: "100px"}} /> 
            <button onClick={() => handleUpvote(_id)}>Upvote</button>
            <p>{upvote.length}</p>
            <button onClick={() => handleDownvote(_id)}>Downvote</button>
            <p>{downvote.length}</p>

        </div>
        { isUser && (
        <>
        <button> Edit </button>
        <button> Delete </button>
        </>
        )}
        <CommentForm issueId= {_id} />
         <CommentList  issueId= {_id}/>
        </>
    )
    
}