import React from "react";

export default function SavedMemes(props) {
    const [meme, setMeme] = React.useState({
        topText: props.topText,
        bottomText: props.bottomText,
        randomImage : props.randomImage
    })
    const [isShown, setIsShown] = React.useState( true )
    const [showEdit, setShowEdit] = React.useState( false )
    // function saveMeme (){
    //     setSavedMemes(prevMemes =>{
    //         return  [...prevMemes, meme]
    //     })
    // }

    function editMeme() {
        setShowEdit(prev => !prev)
    }

    function deleteMeme() {
        return setIsShown( prevState => !prevState)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setMeme(prevState => {
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
           
                { isShown && 
                    <>
                        <h1>{meme.topText}</h1>
                        <h1>{meme.bottomText}</h1>
                        <img src= {meme.randomImage}/>
                        <button 
                        className="editButton"
                        onClick={editMeme}>{showEdit ? 'Save' : 'Edit'}</button>
                        <button
                        className="deleteButton" 
                        onClick={deleteMeme}>Delete</button> 
                    </>
                }
                { showEdit &&
                    <>
                        <input 
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                        <input 
                            name="bottomText"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                        <input 
                            name="randomImage"
                            onChange={handleChange}
                            value={meme.randomImage}
                        />
                    </>
                }
        </>
    )
}