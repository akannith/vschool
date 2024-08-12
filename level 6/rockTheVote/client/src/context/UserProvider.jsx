import React, {useEffect, useState} from "react"
import axios from 'axios'

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
        token : localStorage.getItem("token") || "",
        issue: [],
        errMgs: ""
    }

    const [userState, setUserState] = useState(initState)
    const [issueState, setIssueState] = useState([])
    const [commentState, setCommentState] = useState ([])
   
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
   
    async function getUserIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/user')
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issue: res.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
   
    async function addIssue(newIssue){
        try {
            const res = await userAxios.post('/api/main/issues', newIssue)
            setUserState(prevState => {
                return {
                    ...prevState,
                    issue: [...prevState.issue, res.data]
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function getAllIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/')
            setIssueState( res.data )
        } catch (error) {
            console.log(error)
        }
    }


    async function handleUpvote(issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`)
            console.log(res.data)
            setIssueState(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    issue: prevUserState.issue.map(issue => issue._id === issueId ? res.data : issue)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDownvote(issueId){
        try {
            const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`)
            console.log(res.data)
            setIssueState(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    issue: prevUserState.issue.map(issue => issue._id === issueId ? res.data : issue)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    // async function getUserComments(){
    //     try {
    //         const res = await userAxios.get('/api/main/comments/user')
    //         setUserState(prevUserState => {
    //             return {
    //                 ...prevUserState,
    //                 comment: res.data
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    async function addComment(newComment, issueId){
        try {
            const res = await userAxios.post(`/api/main/comments/${issueId}`, newComment)
            setCommentState(prevState => {
                return [
                    ...prevState,
                    res.data
                 ]
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function getAllComments(){
        try {
            const res = await userAxios.get('/api/main/comments/')
            setCommentState( res.data )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getAllComments()
    }, [])
    
    return (
        <UserContext.Provider value = {{
            ...userState, 
            signup, 
            login, 
            logout, 
            getUserIssues, 
            addIssue, 
            getAllIssues,
            issueState,
            handleAuthErr,
            resetAuthErr,
            handleUpvote,
            handleDownvote,
            commentState,
            addComment,
            getAllComments
            }}>

            {props.children}

        </UserContext.Provider>
    )
}
export {UserProvider, UserContext}