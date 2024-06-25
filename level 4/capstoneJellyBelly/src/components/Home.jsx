import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate()
    return (
      <>
      <p className="description"> 
        In 1976, David Klein, a candy and nut distributor, collaborated with Herman Rowland (grandson of Herman Goelitz) to develop a jelly bean using natural flavoring. 
        Using the Mini Jelly Bean concept, the Jelly Belly jelly bean was created.
      </p>
      <div className="body">
      </div>
        <div style={{padding: 20 }} className="NavButtons">
        <button onClick={()=> navigate("/FlavorsAndIngredients")}>Flavors and Ingredients</button>
        <button onClick={()=> navigate(-1)}>back 1</button>
        <button onClick={()=> navigate(1)}>forward 1</button>
        <button onClick={()=> navigate(2)}>forward 2</button>
        </div>
      </>
    )
}   