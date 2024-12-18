import React ,{useState,useEffect}from "react";
import axios from "./axiosConfig";
import {useNavigate,Link} from "react-router-dom"
import "./recipe.css"
function RecipeList() {
    const navigate = useNavigate()
    const [recipeList,setRecipeList] = useState([])
    useEffect(() => {
        fetchDeatils()

    },[])
    const categaoryrecipe = async(item) => {
        try{
                console.log("reee",item)
        const recipecategarielist = `/1/filter.php?c=${item}`
        const data = await axios.get(recipecategarielist)
        if(data.status == 200){
            navigate("/recipesbycategarie",{
                state: data.data.meals
            })
        }
        console.log(data)

        }
        catch(err){
            console.log(err)
        }
    

    }
    const fetchDeatils = async () => {
        try{
         
            let url ="/1/categories.php"

            let data = await axios(url)
            setRecipeList(data.data.categories)


        }
        catch(err){
            console.log(err)
        }
       
    }
  
    return(
        <div>

        <div className="recipe-container">
        
        {
            recipeList.map((item)=> (
                
                <div className="recepie-card" style={{cursor:"pointer"}}onClick={() => categaoryrecipe(item.strCategory)} key={item.idCategory}>
                <img style={{width:"300px",height:"300px"}} src={item.strCategoryThumb}/>
                <p>{item.
                    strCategory}</p>
                     <div >{item.
                        strCategoryDescription
                        }</div>
               
              
                </div>
            ))
        }
      
        </div>
        </div>
    )

}
export default RecipeList;