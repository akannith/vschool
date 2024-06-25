import React from "react";

export default function Header () {
    const [uglyimage, setUglyImage] = React.useState ({
        Title: "",
        randomImage: "",
        Description: ""
    })
    const [alluglyimage, setAllUglyImage] = React.useState([])
    
    const [savedUglyImage, setSavedUglyImage] = React.useState([])
    React.useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => setAllUglyImage(data.data.uglyimage))
    }, [])   
     
    
    function getUglyImage (){
        const randomNumber = Math.floor(Math.random() * allUglyImage.length)
        const url = allUglyImage[randomNumber].url
        setUglyImage(prevUglyImage => ({
            ...prevUglyImage,
            randomImage: url
        }))
    }

    function saveUglyImage (){
        setSavedUglyImage(prevUglyImage => ({
            ...prevUglyImage, 
            randomImage: url
        }))
    }
    const listOfUglyImages = SavedUglyImage.map((uglyimage, index) => {
        return <SavedUglyImage
                    key={index}
                    Title={uglyimage.Title}
                    randomImage ={ uglyimage.randomImage}
                    Description = { uglyimage.Description}
                />
    })

    function handleChange(event) {
        const {name, value} = event.target
        setUglyImage(prevUglyImage => ({
            ...prevUglyImage,
            [name]:value
        }))
    }
    return (
        <div className="form">
            <div>
                <input 
                    type="text" 
                    placeholder="Title" 
                    className= "input"
                    name="Title"
                    value={uglyimage.Title}
                    onChange={handleChange}
                />
               

                <img
                    src={uglyImage.randomImage}
                    className="uglyImage"
                    placeholder="Img URL" 
                />


                <input 
                    type="text" 
                    placeholder="Description" 
                    className= "input"
                    name="Title"
                    value={uglyimage.Title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button
                    className="form-button"
                    onClick={getUglyImage}
                > Submit </button>
            </div>
            {listOfUglyImages}
        </div>
    )
}