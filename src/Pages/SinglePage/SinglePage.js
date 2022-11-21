import { MainContext } from "../../App";
import { React, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./SinglePage.scss";
import EditRecipeModal from "../../Components/EditRecipeModal/EditRecipeModal";
import { useRemoveRecipeMutation } from "../../apiManagement/apiManagement";

function SinglePage(props) {
  const { id } = useParams();
  const { update, recipes } = useContext(MainContext);
  const history = useHistory();
  const [editModal, setEditModal] = useState(false);
  const recipe = recipes.find((e) => e.id === id);
  const [removeRecipe] = useRemoveRecipeMutation();

  const handleRemoveRecipe = () => {
    removeRecipe(id).then(() => update());
  };

  const handleModal = () => {
    setEditModal(!editModal);
  };
  return (
    <div className="SinglePage">
      <div className="imageWrap">
        <h1 className="recipeName">{recipe?.recipeName}</h1>
        <img src={recipe?.image}></img>
      </div>
      <div className="inside-wrapper">
        <div className="box ingredients">
          <p className="title">Ingredients</p>{" "}
          {recipe?.ingredients?.map((e, i) => {
            return <p key={i}>{e}</p>;
          })}
        </div>
        <div className="boxPrepTime">
          <p className="title">Prep time</p>
          {recipe?.prepTime} min
        </div>
      </div>
      <div className="boxGuide">
        <p className="title">Prep Guide</p>
        {recipe?.preparation}
      </div>
      <div className="btnBox">
        <button className="btn" onClick={handleModal}>
          Change Recipe
        </button>
        <button
          className="btnRemove"
          onClick={() => {
            handleRemoveRecipe();
            history.push("/");
          }}
        >
          Remove Recipe
        </button>
      </div>
      {editModal && <EditRecipeModal recipe={recipe} handleModal={setEditModal} update={update} />}
    </div>
  );
}

export default SinglePage;
