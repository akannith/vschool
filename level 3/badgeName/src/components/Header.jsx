import React from "react";
import Badge from "./Badge";

export default function Header() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", placeOfBirth: "", phone: "", favoriteFood: "", tellUsAboutYourself:""}
    )
    const [badge, setBadge] = React.useState([])

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }        
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        // console.log(formData.firstName + " form data")
        setBadge(prevBadge => {
            console.log(formData)
            return [
                ...prevBadge,
                formData
            ]
        })
        setFormData( {firstName: "", lastName: "", email: "", placeOfBirth: "", phone: "", favoriteFood: "", tellUsAboutYourself:""} )
    }

    const badges = badge.map((person, index) => {
        return (
            <Badge 
                key={index}
                firstName = {person.firstName}
                lastName = {person.lastName}
                email = {person.email}
                placeOfBirth= {person.placeOfBirth}
                phone = {person.phone}
                favoriteFood = {person.favoriteFood}
                tellUsAboutYourself = {person.tellUsAboutYourself}
               
            />
        )
    })
     
    return (
        <>
        <form onSubmit={handleSubmit} className="container">
            <div className="line">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required pattern="[A-Za-z]{3,}"
            />
               <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required pattern="[A-Za-z]{3,}"
            />
            </div>

            <div className="line">
               <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required pattern="[A-Za-z]{3,}"
            />
               <input
                type="text"
                placeholder="Place of birth"
                onChange={handleChange}
                name="placeOfBirth"
                value={formData.placeOfBirth}
                required pattern="[A-Za-z]{3,}"
            />
            </div>

            <div className="line">
               <input
                type="number"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                required pattern="^[0-9]+$"
            />
               <input
                type="text"
                placeholder="Favorite Food"
                onChange={handleChange}
                name="favoriteFood"
                value={formData.favoriteFood}
                required pattern="[A-Za-z]{3,}"
            />
            </div>
             
            <textarea 
                value={formData.tellUsAboutYourself}
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="tellUsAboutYourself"
                required pattern="[A-Za-z]{3,}"
            />
             
            <button className="form-button">Submit</button>

        </form>
        {badges}
        </>
    )
    }
