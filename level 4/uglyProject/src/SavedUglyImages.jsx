import React from "react";

export default function SavedUglyImage(props) {
    const [uglyImage, setUglyImage] = React.useState({
       Title : props.Title,
       randomImage : props.randomImage,
       Description : props.Description
    })

   const [isShown, setIsShown] = React.useState (true)
   
   function handleChange(e) {
    const {name, value} = e.target
    setUglyImage(prevState => {

        return (
            {
                ...prevState,
                [name]: value
            }
        )
    })
    }

return (
    <>
        {isShown &&
            <>
                <h1>{uglyImage.Title}</h1>
                <img src= {uglyImage.randomImage}/>
                <h2> {uglyImage.Description}</h2>
            </>
        }
    </>
)
}