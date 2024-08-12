import React, {useContext, useState} from 'react';
import Form from './Form';
import { UserContext } from '../context/UserProvider';


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
          <Form 
          isMember = {isMember} 
          submit= {login}
          errMgs = {errMgs}
          /> 
          <button onClick = {toggleForm} >Create an Account?</button>
                 
          </>
          
          : 
          
          <>
          <Form 
          isMember = {isMember}
          submit= {signup}
          errMgs = {errMgs}
           /> 
          <button onClick = {toggleForm}>Already a Member?</button>
                   
          </>
        }
        
     
       
        </div>
     );
}

export default Auth;