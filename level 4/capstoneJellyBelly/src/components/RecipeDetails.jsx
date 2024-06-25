import React, { useEffect, useState } from 'react';




export default function RecipeDetails(props) {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        fetch('https://jellybellywikiapi.onrender.com/api/Recipes')
            .then(response => response.json())
            .then(data => setRecipes(data.items))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);
    

    return (
        <>
            {recipes.map((recipe, recipeIndex) => (
                <div key={recipeIndex}>
                    <p>{recipe.description}</p>
                    <p><strong>Making Amount:</strong> {recipe.makingAmount}</p>
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2>Directions:</h2>
                    <ol>
                        {recipe.directions.map((direction, index) => (
                            <li key={index}>{direction}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </>
    );
}

