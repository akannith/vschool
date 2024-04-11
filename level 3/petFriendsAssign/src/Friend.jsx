import React from "react";
import Pet from "./Pet.jsx"

export default function Friend (props){
    const pets = props.pets.map((pet)=> {
        return <Pet {...pet}/>
    }
    )
    return(
        <div>
        
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
           {pets}
    
        </div>
    )

}
