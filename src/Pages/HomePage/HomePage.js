import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from '../../App'
import "./HomePage.scss"
import { v4 as uuidv4 } from 'uuid';
import searchIcon from '../../Pages/HomePage/searchIcon.png'


import RecipeCard from "../../Components/RecipeCard/RecipeCard";

function HomePage() {
    const { recipes } = useContext(MainContext)
    const [searchInput, setSearchInput] = useState("")

    const filteredRecipes = recipes.filter((e) => e.recipeName.toLowerCase().includes(searchInput));


    return (
        <div className='HomePage'>
            <input type="text" className="searchInput" name="search" value={searchInput} placeholder="Search Recipes" onChange={(e) => setSearchInput(e.target.value)}></input>
            {filteredRecipes ? filteredRecipes.map((e) => {
                return (
                    <Link to={`/recipe/${e.id}`} key={uuidv4()}>
                        <RecipeCard recipe={e} />
                    </Link>
                )
            }) : recipes.map((e) => {
                return (
                    <Link to={`/recipe/${e.id}`} key={uuidv4()}>
                        <RecipeCard recipe={e} />
                    </Link>
                )
            })}
        </div>
    )
}

export default HomePage