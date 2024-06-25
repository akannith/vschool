import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 


export default function SearchRecipes(props) {
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState([]);
    const [oneRecipe, setOneRecipe] = useState({})

  
    useEffect(() => {
      fetch('https://jellybellywikiapi.onrender.com/api/Recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.items))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const getRecipeDetails= (id) => {
    fetch(`https://jellybellywikiapi.onrender.com/api/Recipes/${id}`)
    .then(response => response.json())
      .then(data => setOneRecipes(data.items))
      .catch(error => console.error('Error fetching recipes:', error));
  }
  
     
    return (  
      
        <div style={{ padding: 20 }}>
          {recipes.map(recipe => (
           <div key={recipe.recipeId} id={recipe.recipeId}>
            
             <Link to= {`/SearchRecipes/${recipe.recipeId}`} onClick={() => getRecipeDetails(recipe.recipeId)}>{recipe.name}</Link>
             
          </div>
          ))}
            <div className="NavButtons">
            <button onClick={()=> navigate("/FlavorsAndIngredients")}>Flavours and Ingredients</button>
            <button onClick={()=> navigate("/")}>Return Home</button>
            <button onClick={()=> navigate(1)}> Next </button>
            <button onClick={()=> navigate(-1)}> Back </button>
        </div>
       </div>
    )
    }