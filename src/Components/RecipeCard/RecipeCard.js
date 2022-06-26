import React from 'react'
import "./RecipeCard.scss"

function RecipeCard(props) {
    return (
        <div className="RecipeCard">
            <img src={props.recipe.image} alt="image"></img>
            <p>{props.recipe.recipeName}</p>
        </div>
    )
}

export default RecipeCard