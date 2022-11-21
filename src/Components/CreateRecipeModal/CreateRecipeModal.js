import React, { useState } from "react";
import "./CreateRecipeModal.scss";
import { useHistory } from "react-router-dom";
import { useCreateRecipeMutation } from "../../apiManagement/apiManagement";

function CreateRecipeModal(props) {
  const history = useHistory();
  const [createRecipe, response] = useCreateRecipeMutation();

  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    prepTime: 0,
    image: "",
    ingredients: [],
    preparation: "",
  });

  const handleCreateReipe = async () => {
    await createRecipe(newRecipe);
    props.update();
    props.openRecipeModal();
  };

  console.log(response);

  return (
    <div className="CreateRecipeModal">
      <div className="content">
        <div className="form">
          <button className="close" onClick={() => props.openRecipeModal()}>
            Close
          </button>
          <p>Fill the information</p>
          <br />

          <p> Recipe Name </p>
          <input
            type="text"
            placeholder="Type name of recipe"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                recipeName: e.target.value,
              });
            }}
          />

          <p> Preparation Time (minutes) </p>
          <input
            type="number"
            placeholder="Type tyme for preparation"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                prepTime: e.target.value,
              });
            }}
          />

          <p>List of Ingredients</p>
          <input
            type="text"
            placeholder="Type ingredients"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                ingredients: e.target.value.split(","),
              });
            }}
          />

          <p> Picture for Recipe (URL): </p>
          <input
            type="text"
            placeholder="Type URL for image"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                image: e.target.value,
              });
            }}
          />

          <p>Preparation Guide</p>
          <textarea
            type="text"
            placeholder="Type instructions"
            onChange={(e) => {
              setNewRecipe({
                ...newRecipe,
                preparation: e.target.value,
              });
            }}
          />
          <br></br>
          <button
            className="btn"
            onClick={() => {
              handleCreateReipe();
              history.push("/");
            }}
          >
            Create Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipeModal;
