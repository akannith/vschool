import React, {useContext, useState} from "react";
import AuthForm from "./AuthForm"
import { UserContext } from '../contextProvider/UserProvider'

function Auth() {
    const {login, signup, errMgs, resetAuthErr } = useContext(UserContext)
    const [isMember, setIsMember] = useState(false)

    const toggleForm = () => {
        setIsMember(!isMember)
        resetAuthErr()
    }
return (
    <div id = "auth-div">
        {
            isMember ?
            <>
            <AuthForm
            isMember = {isMember}
            submit = {login}
            errMgs = {errMgs}
            />
            <button onClick={toggleForm} > Creat an Account? </button>
            
            </>

            :

            <>
            <AuthForm
            isMember = {isMember}
            submit = {signup}
            errMgs = {errMgs}
            />
            <button onClick = {toggleForm}> Alredy a Member? Please Sign in!</button>
            </>
        }

    </div>

);
}

export default Auth;