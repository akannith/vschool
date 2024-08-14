import React, { useState } from "react"

export default function AddEntreeForm(props){
    const initInputs = {
        Name: props.Name ||"",
        Price: props.Price ||"",
        ComesWith: props.ComesWith ||""
    }
    const [inputs, setInputs]= useState(initInputs)
    
    function handleChange(e){
        const {name, value}= e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }) )
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        props.btnText !== "save" && setInputs(initInputs)
        props.btnText === "save" && props.handleToggle()
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="Name"
            value={inputs.Name}
            onChange={ handleChange}
            placeholder="Entree Name"/>

            <input
            type="text"
            name="Price"
            value={inputs.Price}
            onChange={ handleChange}
            placeholder="Entree Price"/>

            <input
            type="text"
            name="ComesWith"
            value={inputs.ComesWith}
            onChange={ handleChange}
            placeholder="Entree Come's With"/>

            <button> {props.btnText} </button>
            
        </form>
    )
}