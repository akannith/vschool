import  {useContext, useState} from "react"
import {UserContext} from "../context/UserProvider"
import ItemForm from "./ItemForm"
import UserReviewForm from "./UserReviewForm"
import UserReviewList from "./UserReviewList"


export default function Item(props) {
    
    const {name, description, price, imgUrl, userId, username, _id} = props
    const {deleteItem, editItem, user} = useContext(UserContext)
    const [editToogle, setEditToggle] = useState(false)
    // const [edit, setEdit] = useState({""})

    console.log("userId: ", userId)
    console.log("user._id: ", user._id)
    
    let isUser = userId === user._id

    function deleteBtn() {
        deleteItem(_id)
    }
    function handleToggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    
    return(
            <div>
                <h1>{username}</h1>
                <h1>{name}</h1>
                <h4>{description}</h4>
                <h4>{price}</h4>
                <img src= {imgUrl} style={{height: "100px", width: "100px"}} />

           { isUser && 
             <>
                <button onClick={() => deleteBtn(_id)}>
                 Delete
                </button>
                {!editToogle ?
                <button 
                 className="editBtn"
                 onClick={() =>setEditToggle(prevToogle => !prevToogle)}> 
                 Edit 
                 </button>
            :
            <>
            <ItemForm 
                username={username}
                name={name}
                description={description}
                price={price}
                imgUrl= {imgUrl} 
                _id={_id}
                submit={props.editItem}
                btnText={"save"}
                handleToggle={handleToggle}
                />
            <UserReviewList itemId= {_id} />
            <UserReviewForm itemId= {_id} />
            <button
             onClick={() => setEditToggle(prevToggle => !prevToggle)}>
             Close 
             </button>
           </>
            }
            </>
            }
        </div>

    )
}




