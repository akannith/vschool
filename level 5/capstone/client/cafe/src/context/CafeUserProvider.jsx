import React, {useEffect, useState} from "react";
import axios from 'axios'
import Entree from "./components/Entree.jsx"
import AddEntreeForm from "./components/AddEntreeForm.jsx"

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props){
   
    const initState = {
    user : JSON.parse(localStorage.getItem("user")) || {},
    token : localStorage.getItem("token")  || "",
    errMgs: ""
    
    }

    const [cafeUserState, setCafeUserState] = useState(initState)
  

    async function signup(creds){
        try {
            const res = await axios.post('/api/auth/signup', creds)
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setCafeUserState(prevCafeUserState => {
                return {
                    ...prevCafeUserState,
                    user: user,
                    token: token
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
            setCafeUserState(prevCafeUserState => {
                return {
                    ...prevCafeUserState,
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
            setCafeUserState(prevCafeUserState => {
                return {
                    ...prevCafeUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    function handleAuthErr(errMgs){
        setCafeUserState(prevCafeUserState => {
            return {
                ...prevCafeUserState,
                errMgs
            }
        })

    }
    
    function resetAuthErr(){
        setCafeUserState(prevCafeUserState => {
            return {
                ...prevCafeUserState,
                errMgs:""
            }
    })}

return (
    
     <UserContext.Provider value = {{
        ...cafeUserState,
        signup,
        login,
        logout,
        handleAuthErr,
        resetAuthErr

     }}>
        {props.children}
    </UserContext.Provider>
    )
}
export {UserProvider, UserContext}