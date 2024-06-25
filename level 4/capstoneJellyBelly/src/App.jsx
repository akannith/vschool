import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import './App.css'
import SearchRecipes from './components/SearchRecipes.jsx'
import FlavorsAndIngredients from './components/FlavorsAndIngredients.jsx'
import Context from './components/Context.jsx' 
import RecipeDetails from './components/RecipeDetails.jsx'

function App(props) {
  

  return (
      <Context.Provider value= ""> 
        <Router>
          
          <nav style={{ margin: 10}} className='navbar'>
            <Link to="/" style={{ padding: 5}}>
             Home 
            </Link>
            <Link to="/FlavorsAndIngredients" style={{ padding: 5}}>
            FlavorsAndIngredients 
            </Link> 
            <Link to="/SearchRecipes" style={{ padding: 5}}>
            SearchRecipes 
            </Link>  
          </nav>  
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/FlavorsAndIngredients" element = {<FlavorsAndIngredients />} />
            <Route path = "/SearchRecipes" element = {<SearchRecipes />} />
            <Route path= "SearchRecipes/:recipeID" element={<RecipeDetails/>}/>
          </Routes>
         
        </Router>
      </Context.Provider>
  )
}

export default App
