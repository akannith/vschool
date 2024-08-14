import  {useContext} from "react"
import {UserContext} from "../context/UserProvider"
import ItemForm from "./ItemForm"
import UserReviewForm from "./UserReviewForm"
import UserReviewList from "./UserReviewList"


export default function Item(props) {
    
    const {name, description, price, imgUrl, userId, username, _id} = props
    const {user} = useContext(UserContext)

    console.log("userId: ", userId)
    console.log("user._id: ", user._id)
    
    let isUser = userId === user._id

    return(
        <>
            <div>
                <h1>{username}</h1>
                <h1>{name}</h1>
                <h4>{description}</h4>
                <h4>{price}</h4>
                <img src= {imgUrl} style={{height: "100px", width: "100px"}} />
           </div>
           { isUser && (
             <>
                 <button> Edit </button>
                <button> Delete </button>
            </>
             )}
           <div>
           
            <UserReviewForm itemId= {_id} />
            <UserReviewList itemId= {_id} />
            
           </div>
        </>

    )
}

