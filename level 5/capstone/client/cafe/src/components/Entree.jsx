import React, {useState} from "react"
import AddEntreeForm from "./AddEntreeForm.jsx"

export default function Entree(props){
    const {Name, Price, ComesWith, _id} = props
    const [editToggle, setEditToggle] = useState(false)
   
    function handleToggle () {
        setEditToggle(prevToggle => !prevToggle)
    }
    
    return (
        <div className="entree">
        {!editToggle ?
            <>
             <h1 className="entreeData"> Name:{Name}</h1>
             <h1 className="entreeData"> Price:{Price}</h1>
             <h1 className="entreeData">ComesWith:{ComesWith}</h1>
             <button
                className='deleteBtn'
                onClick={() => props.deleteEntree(_id)}>
                Delete
            </button>
            <button
            className="editBtn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
            </button>
            </>
            :
            <>
            <AddEntreeForm
            Name={Name}
            Price={Price}
            ComesWith={ComesWith}
            _id={_id}
            submit={props.editEntree}
            btnText={"save"}
            handleToggle={handleToggle}
            />
            <button
             onClick={() => setEditToggle(prevToggle => !prevToggle)}>
             Close 
             </button>
            </>
        }
        </div>
    )
}