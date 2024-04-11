import React from "react";
import Blogpost from "./Blogpost.js"

export default function Bloglist(){
    const arr = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2019"
        },{
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2019"
        },{
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2019"
        },{
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            date: "July 8, 2019"
        }
    ]
    const mappedBlog = arr.map(item => {
        return(
            <Blogpost
             key = {item.title}
               title = {item.title}
                subtitle ={item.subTitle}
                author ={item.author}
                date = {item.date}
            />
        )
    })
    return(
        <div>
            <h1>Blog List</h1>
            {mappedBlog}
        </div>
    )
}

// function (props){

//     return(
//         <div>
        
//             <h3>{props.title}</h3>
//             <h3>{props.subtitle}</h3>
//             <h3>{props.author}</h3>
//             <h3>{props.date}</h3>
//         </div>
//     )
// }