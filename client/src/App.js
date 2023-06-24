
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-recipe' element={<AddRecipe/>}/>
        <Route path='/api/update/:id' element={<UpdateRecipe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
