import React from "react";


export default function (props){

    return(
        <div>
        
            <h3>{props.title}</h3>
            <h3>{props.subtitle}</h3>
            <h3>{props.author}</h3>
            <h3>{props.date}</h3>
        </div>
    )
}