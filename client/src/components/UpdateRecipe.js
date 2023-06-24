import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './AddRecipe.css'

const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
function AddRecipe(){
    
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [ingredients, setIngredients] = useState(""); 
    const [instructions, setInstructions] = useState(""); 
     
    const navigate = useNavigate();
    const getIsFormValid = () => { 
      return ( 
        title && 
        description &&
        ingredients &&
        instructions       
      ); 
    }; 
    
    const clearForm = () => { 
      setTitle(""); 
      setDescription(""); 
      setIngredients(""); 
      setInstructions(""); 
       
      
    }; 
    
    const handleSubmit =  (e) => { 
      e.preventDefault(); 
      const data = { 
        title, 
        description, 
        ingredients, 
        instructions
      }; 
      
      fetch('/add-recipe', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
      }) 
      .then(response => {
        console.log(response.json())
        
      }) 
      .then(data => {
        console.log(data) 
        alert(`Recipe added successfully`); 
        clearForm(); 
        navigate('/');
      }) 
      .catch((error) => { 
        console.error('Error:', error); 
      }); 
    };
    
    return ( 
      <>
      
      <div className="add-recipe-container">

        <div className="recipe-form"> 
          <form onSubmit={handleSubmit}> 
            <fieldset> 
              <h2>Update Recipe</h2> 
              <div className="Field"> 
                <label> 
                  Recipe Title <sup>*</sup> 
                </label> 
                <input type="text"
                  value={title} 
                  onChange={(e) => { 
                    setTitle(e.target.value); 
                  }} 
                  placeholder="Recipe title" 
                /> 
              </div> 
              <div className="Field"> 
                <label> 
                  ingredients <sup>*</sup> 
                </label> 
                <input type="text"
                  value={ingredients} 
                  onChange={(e) => { 
                    setIngredients(e.target.value); 
                  }} 
                  placeholder="ingredients" 
                /> 
              </div> 
              <div className="Field"> 
                <label> 
                  Description <sup>*</sup> 
                </label> 
                <input type="text"
                  value={description} 
                  onChange={(e) => { 
                    setDescription(e.target.value); 
                  }} 
                  placeholder="description" 
                /> 
              </div>
              <div className="Field"> 
                <label> 
                  Instructions <sup>*</sup> 
                </label> 
                <input type="text"
                  value={instructions} 
                  onChange={(e) => { 
                    setInstructions(e.target.value); 
                  }} 
                  placeholder="instructions" 
                /> 
              </div> 
             
             <button type="submit" disabled={!getIsFormValid()}> 
                Update Recipe 
              </button>
            </fieldset> 
            
          </form> 
        </div> 
      </div>
      </>
    ); 

} 

export default AddRecipe;