import {useContext, useState} from "react"
import {UserContext } from "../contextProvider/UserProvider"
import TaskForm from './TaskForm'


export default function Task(props) {

    const {name, description, notes, userId, username, _id} = props
    const {deleteTask, user} = useContext(UserContext)
    const [editToogle, setEditToggle] = useState(false)

    console.log("userId: ", userId)
    console.log("user._id: ", user._id)
    
    let isUser = userId === user._id

    function deleteBtn() {
        deleteTask(_id)
    }
    function handleToggle(){
        setEditToggle(prevToggle => !prevToggle)
    }

    return(
        <div>
            <h1>{username}</h1>
            <h1>{name}</h1>
            <h4>{description}</h4>
            <h4>{notes}</h4>

        { isUser &&
            <>
                <button onClick={() => deleteBtn(_id)}>
                Delete
                </button>
                {!editToogle ?
                <button
                    className="editBtn"
                    onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
                Edit  
                </button>
            :
            <>
            <TaskForm
            username={username}
            name={name}
            description={description}
            notes={notes} 
            _id={_id}
            submit={props.editItem}
            btnText={"save"}
            handleToggle={handleToggle}
            />

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