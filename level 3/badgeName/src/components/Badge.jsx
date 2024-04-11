import React from "react";
import Header from "./Header";


export default function Badge(props) {
    return(
        <div className="badgeContainer">
            <div className="badgeHeader">
                <h2> Badge:</h2>
            </div>
            <div className="gridContainer">
           <div className="badgeLine"> 
                <h3> Name: {[props.firstName] + " " +[props.lastName]}</h3>
            </div>   
                <h3> Phone: {props.phone}</h3>
            <div className="badgeLine">
                <h3> Place Of Birth:{props.placeOfBirth}</h3>
            </div>
                <h3> Favorite Food: {props.favoriteFood}</h3>
            <div className="badgeLine">
                <h3> Email: {props.email}</h3>
            </div>
            </div>
            <div className="badgeLine2">
            <h3>{props.tellUsAboutYourself}</h3>
            </div>
            
        </div>
       
    )
}