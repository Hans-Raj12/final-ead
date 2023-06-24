import RecipeCards from "../components/RecipeCards";
import {Link} from 'react-router-dom'
import ShowRecipes from "../components/ShowRecipes";
const Home = () => {
    return (
        <div className="homepage">
            <h1>Recipe Management</h1>
            
            <Link to='/add-recipe'>Add new Recipe</Link>
            <br/>
            <div>            
                <ShowRecipes/>
            </div>
        </div>
    )
}

export default Home;