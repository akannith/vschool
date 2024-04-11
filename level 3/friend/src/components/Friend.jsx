import React from "react";
import Pet from "./Pet.jsx"

export default function Friend (props){
    const pets = props.pets.map((pet, index)=> {
        return <Pet key = {index} {...pet}/>
    }
    )
    return(
        <div>
            <div className="Friend">
                <h3>Friend's Name :{props.name}</h3>
                <h3>Friend's Age :{props.age}</h3>
                {pets}
            </div>
        </div>
    )

}
