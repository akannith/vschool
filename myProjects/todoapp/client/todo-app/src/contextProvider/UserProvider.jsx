import React, {useState, useEffect} from "react"
import axios from 'axios'


const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {

    const initState = {
        user : JSON.parse(localStorage.getItem("user")) || {},
        token : localStorage.getItem("token") || "",
        errMgs: "",
        task: []
    }

    const [userState, setUserState] = useState(initState)
    const [taskState, setTaskState] = useState([])
    

    async function signup(creds){
        try {
            const res = await axios.post('/api/auth/signup', creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token:token
                }
            })
        } catch (error) {
            handleAuthErr(error.response.data.errMgs)
        }
    }
    
    async function login(creds){
        try {
            const res = await axios.post('/api/auth/login', creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
        } catch (error) {
           handleAuthErr(error.response.data.errMgs)
        }
    }

    async function logout(){
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
            
        }
    }
   
    function handleAuthErr(errMgs){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMgs
            }
        })

    }
    
    function resetAuthErr(){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMgs:""
            }
    })}


   

        async function getUserTasks() {
            try {
                const res = await userAxios.get('/api/main/tasks/user')
                setUserState(prevUserState => {
                    return{
                        ...prevUserState,
                        task: res.data
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
   

        async function getTasks() {
            try {
                const res = await userAxios.get('/api/main/tasks')
                setTaskState(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        useEffect(() => {
           getTasks()
           getUserTasks() 
        }, [taskState])


    async function addTask(newTask){
        try {
            const res = await userAxios.post('/api/main/tasks', newTask)
            setTaskState(prevState => {
                return [
                    ...prevState, res.data
                ]
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function editTask(updates, taskId) {
        try {
            const res = await userAxios.put(`/api/main/tasks/${taskId}`, updates)
            setTaskState(prevState => prevState.map(task => task._id === taskId ? task : res.data))
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteTask(taskId){
        try{
            const res = await userAxios.delete(`api/main/tasks/${taskId}`)
            setTaskState(prevState => prevState.filter(task => task._id !== taskId))
        }catch (error) {
                console.log(error)
            }
        }



    return(
        <UserContext.Provider value = {{
            ...userState, 
            signup, 
            login, 
            logout, 
            handleAuthErr,
            resetAuthErr,
            getUserTasks,
            taskState,
            getTasks,
            addTask,
            editTask,
            deleteTask
            
            }}>

            {props.children}

        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}