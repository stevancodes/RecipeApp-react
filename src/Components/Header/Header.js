import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from '../../App'
import CreateRecipeModal from "../CreateRecipeModal/CreateRecipeModal";
import "./Header.scss";



function Header() {
    const { update } = useContext(MainContext);
    const [newRecipeModal, setNewRecipeModal] = useState(false);

    function openRecipeModal() {
        setNewRecipeModal(!newRecipeModal);
    }

    return (
        <div className="Header">
            <Link to="/"><h1>Coolinarka</h1></Link>
            <div className="inside-wrapper">
                <Link to="/">Recipes</Link>
                <button onClick={openRecipeModal}>Create Recipe</button>
            </div>
            {newRecipeModal && <CreateRecipeModal update={update} openRecipeModal={openRecipeModal} />}
        </div>
    )
}

export default Header