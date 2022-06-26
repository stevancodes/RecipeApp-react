import { MainContext } from '../../App'
import { React, useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./SinglePage.scss"
import EditRecipeModal from '../../Components/EditRecipeModal/EditRecipeModal';

function SinglePage(props) {
    const { id } = useParams()
    const { update, recipes } = useContext(MainContext)
    const history = useHistory()
    const [editModal, setEditModal] = useState(false)
    const recipe = recipes.find((e) => e.id == id);



    const removeRecipe = () => {
        fetch(`https://62b71438491a19c97aee3be7.mockapi.io/recipes/${recipe.id}`, {
            method: 'DELETE',
            headers: { "content-type": 'application/json' }
        })
            .then((res) => res.json())
            .then(() => update());
    }

    const handleModal = () => {
        setEditModal(!editModal)
    }
    return (
        <div className="SinglePage">
            <div className="imageWrap">
                <h1 className="recipeName">{recipe?.recipeName}</h1>
                <img src={recipe?.image}></img>
            </div>
            <div className="inside-wrapper">
                <div className="box ingredients"><p className="title">Ingredients</p> {recipe && recipe.ingredients.map((e, i) => {
                    return (<p key={i}>{e}</p>)
                })}</div>
                <div className="box overflowNone"><p className="title">Prep time</p>{recipe && recipe.prepTime} min</div>
            </div>
            <div className="boxGuide"><p className="title">Prep Guide</p>{recipe && recipe.preparation}</div>
            <div className="btnBox">
                <button className="btn" onClick={handleModal}>Change Recipe</button>
                <button className="btnRemove" onClick={() => {
                    removeRecipe()
                    history.push("/")
                }}>Remove Recipe</button>
            </div>
            {editModal && <EditRecipeModal recipe={recipe} handleModal={setEditModal} update={update} />}
        </div>
    )
}

export default SinglePage