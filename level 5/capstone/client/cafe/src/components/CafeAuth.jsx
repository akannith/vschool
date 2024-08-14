import React, {useContext, useState} from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "./context/CafeUserProvider"

function CafeAuth() {
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
          submit= {login}
          errMgs = {errMgs}
          /> 
          <button onClick = {toggleForm} >Create an Account?</button>
                 
          </>
          
          : 
          
          <>
          <AuthForm 
          isMember = {isMember}
          submit= {signup}
          errMgs = {errMgs}
           /> 
          <button onClick = {toggleForm}>Already a Member?</button>
                   
          </>
        }
        
     
       
        </div>
    )
}

export default CafeAuth;