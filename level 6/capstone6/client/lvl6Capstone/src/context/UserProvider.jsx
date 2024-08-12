import React, {useState} from "react"
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
        errMgs: ""
    }

    const [userState, setUserState] = useState(initState)
    const [itemState, setItemState] = useState([])
    const [reviewState, setReviewState] = useState([])

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

    async function getUserItems() {
        try {
            const res = await userAxios.get('/api/main/items/user')
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    item: res.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function getItems() {
        try {
            const res = await userAxios.get('/api/main/items')
            setItemState(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    async function addItem(newItem){
        try {
            const res = await userAxios.post('/api/main/items', newItem)
            setItemState(prevState => {
                return [
                    ...prevState, res.data
                ]
            })
        } catch (error) {
            console.log(error)
        }
    }

   async function addReview(newReview, itemId) {
    try {
        const res = await userAxios.post(`/api/main/reviews/${itemId}`, newReview)
        setReviewState(prevState => {
            return [
                ...prevState,
                res.data
             ]
            })
    } catch (error) {
        console.log(error)
         }
   }

   async function getAllReviews(){
    try {
        const res = await userAxios.get('api/main/reviews/')
        setReviewState(res.data)
    } catch (error) {
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
            getUserItems,
            itemState,
            getItems,
            addItem, 
            reviewState,
            addReview,
            getAllReviews
            }}>

            {props.children}

        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}