import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./components/Bounty.jsx"
import AddBountyForm from "./components/AddBountyForm.jsx"



  function App(){
    const [bounties, setBounties] = useState([])
     
    function getBounties() {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addBounty(newBounty){
        axios.post("/bounties", newBounty)
         .then(res => {
             setBounties(prevBounties => [...prevBounties, res.data])
            })
         .catch(err => console.log(err))
    } 

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }   
     
    function editBounty(updates, bountyId){
       axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            console.log(res.data)
            setBounties(prevBounties => prevBounties.map (bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getBounties()
       }, [])
    return(
        <div>
          <div className='bounty-container'>
            <AddBountyForm
            submit={addBounty}
            btnText = "Add Bounty"
            />
           
           {
           bounties.map(bounty =>{
            return (
            <Bounty
               {...bounty} 
               key={bounty._id}
               deleteBounty={deleteBounty}
               editBounty={editBounty}/>)
            })
            }
           
          </div>
        </div>
    )
}

export default App
