import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RecipeList from "./components/RecipeList"
import Recipecategariewise from "./components/Recipecategariewise"
import IndividualRecipedetails from "./components/IndividualRecipedetails"
function App() {
  return (
    <div className="App">
        <h1>Recipes</h1>
        <Router>
        <Routes>
        <Route element={<RecipeList/>} path="/"/>
        <Route element= {<Recipecategariewise/>} path="/recipesbycategarie"/>
        <Route element= {<IndividualRecipedetails/>} path="/recipedetails"/>
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;