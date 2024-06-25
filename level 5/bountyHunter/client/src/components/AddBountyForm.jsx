import React, { useState } from "react"

export default function AddBountyForm(props){
    const initInputs = {
        firstName: props.firstName ||"", 
        lastName: props.lastName ||"",
        living:props.living || "True", 
        amount:props.amount ||"", 
        type:props.type ||"Jedi"
    }

    const [inputs, setInputs]= useState(initInputs)

    function handleChange(e){
        const {name, value}= e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }) )
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type= "text"
            name ="firstName"
            value ={inputs.firstName} 
            onChange= {handleChange}
            placeholder ="First Name"/>

           <input
            type= "text"
            name ="lastName"
            value ={inputs.lastName} 
            onChange= {handleChange}
            placeholder ="Last Name"/>
          
          
          <select name ="living" onChange= {handleChange}> 
              <option value="True"> True </option>
              <option value="False"> False </option>
            </select>

          <input
            type= "number"
            name ="amount"
            value ={inputs.amount} 
            onChange= {handleChange}
            placeholder ="Amount"/>   
      

         <select name = "type" onChange= {handleChange}> 
              <option value="Jedi"> Jedi </option>
              <option value="Sith"> Sith </option>
        </select>

        <button> {props.btnText} </button>
            
        </form>
    )
}