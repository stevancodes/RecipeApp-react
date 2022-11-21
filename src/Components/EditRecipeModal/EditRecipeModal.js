import React, { useState, useContext } from "react";
// import "./EditRecipeModal.scss"
import { useHistory, useParams } from "react-router-dom";

function EditRecipeModal(props) {
  const history = useHistory();
  const { id } = useParams();

  const [editedRecipe, setEditedRecipe] = useState({
    recipeName: props.recipe.recipeName,
    prepTime: props.recipe.prepTime,
    image: props.recipe.image,
    ingredients: props.recipe.ingredients,
    preparation: props.recipe.preparation,
  });

  const editRecipe = () => {
    fetch(`https://62b71438491a19c97aee3be7.mockapi.io/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedRecipe),
    }).then(() => {
      props.update();
      props.handleModal();
    });
  };

  console.log(props.recipe);

  return (
    <div className="CreateRecipeModal">
      <div className="content">
        <div className="form">
          <button className="close" onClick={() => props.handleModal()}>
            Close
          </button>
          <p>Fill the informations</p>
          <br />

          <p> Recipe Name </p>
          <input
            type="text"
            defaultValue={props.recipe.recipeName}
            onChange={(e) => {
              setEditedRecipe({
                ...editedRecipe,
                recipeName: e.target.value,
              });
            }}
          />

          <p> Preparation Time (minutes) </p>
          <input
            type="number"
            defaultValue={props.recipe.prepTime}
            onChange={(e) => {
              setEditedRecipe({
                ...editedRecipe,
                prepTime: e.target.value,
              });
            }}
          />

          <p>List of Ingredients</p>
          <input
            type="text"
            defaultValue={props.recipe.ingredients}
            onChange={(e) => {
              setEditedRecipe({
                ...editedRecipe,
                ingredients: e.target.value.split(","),
              });
            }}
          />

          <p> Picture for Recipe (URL): </p>
          <input
            type="text"
            defaultValue={props.recipe.image}
            onChange={(e) => {
              setEditedRecipe({
                ...editedRecipe,
                image: e.target.value,
              });
            }}
          />

          <p>Preparation Guide</p>
          <textarea
            type="text"
            defaultValue={props.recipe.preparation}
            onChange={(e) => {
              setEditedRecipe({
                ...editedRecipe,
                preparation: e.target.value,
              });
            }}
          />
          <br />
          <button
            className="btn"
            onClick={() => {
              editRecipe();
              history.push(`/recipe/${id}`);
            }}
          >
            Change Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRecipeModal;
