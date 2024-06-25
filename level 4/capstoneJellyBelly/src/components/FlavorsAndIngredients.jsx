import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const FlavorsAndIngredients = () => {
  const navigate = useNavigate()
  const [flavours, setFlavours] = useState([]);

  
    useEffect(() => {
      fetch('https://jellybellywikiapi.onrender.com/api/Beans')
      .then(response => response.json())
      .then(data => set(data.items))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);
     
    return (
      
        <div style={{ padding: 20 }} >
          <div className='flavourList'>
          <h2> 7up</h2>
          <h2>cream soda </h2>
          <h2>root bear </h2>
          <h2>Acai Berry </h2>
          <h2> Apple Pie la Cold Stone</h2>
          <h2> Barbados Cherry</h2>
          <h2> Berry Blue</h2>
          <h2> Birthday Cake</h2>
          <h2> Bubble Gum</h2>
          <h2> Blueberry</h2>
          <h2>Blue Raspberry </h2>
          <h2> Buttered Popcorn</h2>
          <h2>Cappuccino </h2>
          <h2>Caramel Corn </h2>
          <h2>Jewel Blueberry </h2>
          <h2>Gin Tonic </h2>
          <h2>French Vanilla </h2>
          <h2>Crushed Pineapple </h2>
          <h2> Cranberry Raspberry</h2>
          <h2> Cotton Candy</h2>
          <h2>Coconut </h2>
          <h2> Cinnamon Apple Filled</h2>
          <h2> Chocolate Pudding</h2>
          <h2> Chocolate Devotion</h2>
          <h2>Tutti Fruitti</h2>
          </div>
          <div className="NavButtons">
            <button onClick={()=> navigate("/SearchRecipes")}>Search Recipes</button>
            <button onClick={()=> navigate("/")}>Return Home</button>
            <button onClick={()=> navigate(1)}> Next </button>
            <button onClick={()=> navigate(-1)}> Back </button>
        </div>

        </div>
   
      
  
  
)
    }
        export default FlavorsAndIngredients;
