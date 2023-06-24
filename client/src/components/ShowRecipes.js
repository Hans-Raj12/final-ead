import React, {useState, useEffect, useContext} from 'react'

import RecipeCards from './RecipeCards'
import './RecipeCards.css'
const ShowRecipes = () =>{

    const [recipies, setRecipes] = useState([])

    useEffect(()=>{
  
        fetch("/api/",{
            method:"GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.recipes)
          setRecipes(data.recipes)
          
        })
        .catch(error => console.error(error));
      })

      

    return(
        <div className="show-recipe-container">
            <h1>Recipes</h1>
            <div className='recipe-cards'>
                {recipies.map(recipe=>{
                  return  <RecipeCards key={recipe._id} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}

export default ShowRecipes