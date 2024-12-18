import React from "react";
import { useLocation } from "react-router-dom";
import "./individualRecipedetails.css";

function IndividualRecipedetails() {
  const location = useLocation();
  const data = location.state[0];

  return (
    <>
      <h1>Recipe Details</h1>
      <div className="individaual-recipecontainer">
        <div>
          <img src={data.strMealThumb} className="image-individual" />
        </div>
        <div>
          <h3>{data.strMeal}</h3>
          <p>{data.strInstructions}</p>
        </div>
      </div>
    </>
  );
}
export default IndividualRecipedetails;
