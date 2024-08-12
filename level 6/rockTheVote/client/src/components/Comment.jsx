import { useContext } from "react"
import { UserContext } from "../context/UserProvider"


export default function Comment(props) {
    const {text, userId} = props
    const {user} = useContext (UserContext)


    console.log("userId: ", userId)
    console.log("user._id: ", user._id)


    let isUser = userId === user._id

    return (
        <>
        <div>
            <p>{text}</p>
        </div>
        { isUser && (
        <>
        <button> Edit </button>
        <button> Delete </button>
        </>
        )}
        </>
    
    )
}