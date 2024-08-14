import React, {useState} from 'react';


function AuthForm(props) {
    const initState = {username: '', password: ''}

    const [authFormData, setAuthFormData] = useState(initState)

    const {isMember, submit, errMgs } = props

    function handleChange(e){
        const {name, value} = e.target
        setAuthFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        submit(authFormData)
    }

    return ( 
     
            <form name ='auth-form' id ='auth-form' onSubmit={handleSubmit}>

                <h2>Welcome to MyCafe!</h2>

                <input 
                placeholder='username' 
                name= 'username'
                value={authFormData.username}
                onChange={handleChange}
                />

                <input
                 placeholder='password' 
                 name= 'password'
                 value={authFormData.password}
                 onChange={handleChange}
                 />

                <button>{isMember ? "Login" : "Signup"}</button>
                <p style = {{color: "red"}}> {errMgs}</p>

            </form>
       
     );
}

export default AuthForm;