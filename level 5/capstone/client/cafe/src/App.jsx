import React, {useState, useEffect} from "react"
import axios from "axios"
import Entree from "./components/Entree.jsx"
import AddEntreeForm from "./components/AddEntreeForm.jsx"



  function App(){
    const [entries, setEntries]= useState([])

    function getEntries() {
        axios.get("/cafes")
        .then(res => setEntries(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addEntree(newEntree){
      axios.post("/cafes", newEntree)
        .then(res => {
          setEntries(prevEntries => [...prevEntries, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteEntree(entreeId){
      axios.delete(`/cafes/${entreeId}`)
        .then(res => {
          setEntries(prevEntries => prevEntries.filter(entree => entree._id !== entreeId))
        })
        .catch(err => console.log(err))
    }

   function editEntree(updates, entreeId){
      axios.put(`/cafes/${entreeId}`, updates)
        .then(res => {
          console.log(res.data)
          setEntries(prevEntries => prevEntries.map (entree => entree._id !== entreeId ? entree : res.data))
        })
        .catch(err => console.log(err))
   }
   useEffect(() => {
      getEntries()
         }, [])
   return (
    <div>
      <div className='entreeContainer'>
        <AddEntreeForm
        submit={addEntree}
        btnText = "Add Entree"
        />

      {
          entries.map(entree =>{
            return (
              <Entree
                {...entree}
                key={entree._id}
                deleteEntree={deleteEntree}
                editEntree={editEntree}/>)
          
            })
            }
        </div>
      </div>
    ) 
  }
  export default App