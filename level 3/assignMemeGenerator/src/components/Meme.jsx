import React from "react"
import SavedMemes from "./SavedMemes"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    const [savedMemes, setSavedMemes] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function saveMeme (){
        setSavedMemes(prevMemes =>{
            return  [...prevMemes, meme]
        })  
    }

        
    // .map go over saved memes
    // return a component so we can pass it props/data
    const listOfMemes = savedMemes.map( (meme, index) => {
        return <SavedMemes 
                key={index}
                topText = {meme.topText }
                bottomText = {meme.bottomText}
                randomImage = {meme.randomImage}
            />
    })
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <button className="form-save-button"
                        onClick= {saveMeme}
                >
                    save your meme
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            {/* <img src={memeImage} /> */}
            <h2 className="saved-memes"> Saved Memes </h2>
            {listOfMemes}
        </main>
    )
}