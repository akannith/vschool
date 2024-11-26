import { useState, useContext } from "react";
import {UserContext} from "../contextProvider/UserProvider"

export default function TaskForm () {

    const {addTask} = useContext(UserContext)
    const initState = { 
        name: '',
        description: '',
        notes: ''
    }
        const [taskFormData, setTaskFormData] = useState(initState)

        function handleChange(e){
            const {name, value}= e.target
            setTaskFormData(prevData => {
                return{
                ...prevData,
                [name]: value
                }
            })
        }
    
        function handleSubmit(e){
            e.preventDefault()
            addItem(itemFormData)
            setTaskFormData(initState)
        }
    return(
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={taskFormData.name}
                placeholder="Task Name"
                onChange={handleChange}

            />

            <input
                name="description"
                value={taskFormData.description}
                placeholder="Task description"
                onChange={handleChange}

            />

            <input
                name="notes"
                value={taskFormData.notes}
                placeholder="Task Notes"
                onChange={handleChange}

            />
            <button> Submit</button>
        </form>
    )
}

