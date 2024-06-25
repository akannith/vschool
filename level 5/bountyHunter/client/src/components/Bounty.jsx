import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm.jsx"

export default function Bounty(props){
    const {firstName, lastName, amount, living, type, _id}= props
    const [editToggle, setEditToggle] = useState(false)
   
    return (
        <div className="bounty">
        {!editToggle ?
         <>
                <h1 className="bounty-data"> Name:  {firstName + " " + lastName}</h1>
                <h1 className="bounty-data">  Amount: {amount}</h1>
                <h2 className="bounty-data">  Living: {living ? "true": "false"}</h2>
                <h2 className="bounty-data">  Type:   {type}</h2>

        
            <button
                className='delete-btn'
                onClick={() => props.deleteBounty(_id)}>
                Delete
            </button>
            <button 
            className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit 
            </button>
        </>
         :
         <>
           <AddBountyForm
                firstname={firstName}
                lastname= {lastName}
                amount={amount}
                living={living}
                type={type}
                _id={_id}
                btnText={"Submit / Edit"}
                submit={props.editBounty}
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