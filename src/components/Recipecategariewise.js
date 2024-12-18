import React from "react"
import {useLocation,useNavigate } from "react-router-dom"
import "./recipecategariewise.css"
import axios from "./axiosConfig"
function Recipecategariewise (){
    const location = useLocation()
const navigate = useNavigate()
    const recepiesdata = location.state;
    console.log(recepiesdata,"location")
    const getIndividualRecipeDetails = async (id)=>{
        try{
   let url=`/1/lookup.php?i=${id}`
   let data = await axios.get(url)
   console.log(data.data.meals)
   if(data.status== 200){
    navigate("/recipedetails",{
        state:data.data.meals
    })
   }
        }
        catch(err){
console.log(err)
        }
     
     

    }

    return (
        <div className="recipe-container">
        {
            recepiesdata.map((item,) => (
<div className="recepie-card"  key={item.idMeal} onClick={() => getIndividualRecipeDetails(item.idMeal)} >
<img  className="image-recipe" src={item.strMealThumb}/>
<div  >{item.strMeal}</div>

</div>
            ))
        }
     
        </div>

    )

}
export default Recipecategariewise