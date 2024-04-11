import React from "react";

export default function RandomColor(){
    const [randomColor, setRandomColor] = React.useState()
    
    function getColor() {
        fetch("https://random-color.onrender.com/colors/random")
            .then(res => res.json())
            .then(data => setRandomColor(data.hex))
    }

    React.useEffect(() => {getColor()}, [])

    return (
        <>
        <h1 style={ {backgroundColor: `${randomColor}`} }> Background color </h1>
        <button onClick={ getColor }> change color </button>
        </>
    )
}