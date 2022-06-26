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
            <h1>Coolinarka</h1>
            <div className="inside-wrapper">
                <Link to="/">Recipes</Link>
                <button onClick={openRecipeModal}>Create Recipe</button>
            </div>
            {newRecipeModal && <CreateRecipeModal update={update} openRecipeModal={openRecipeModal} />}
        </div>
        // <div className="header">
        //     <nav className="navbar" role="navigation" aria-label="main navigation">
        //         <div className="website-title is-12">IVANOV KUVAR</div>

        //         <div id="navbarBasicExample" className="navbar-menu is-active">
        //             <div className="navbar-start">
        //                 <Link to="/">
        //                     <button className="navbar-item button is-primary space">
        //                         Veggie recepti
        //                     </button>
        //                 </Link>
        //                 <Link to="/vip">
        //                     <button className="navbar-item button is-primary space">
        //                         VIP recepti
        //                     </button>
        //                 </Link>
        //             </div>

        //             <button
        //                 className="buttonClose"
        //                 onClick={() => {
        //                     openRecipeForm();
        //                 }}
        //             >
        //                 <strong>DODAJ RECEPT</strong>
        //             </button>
        //             {newRecipe && (
        //                 <CreateRecipeModal
        //                     update={update}
        //                     openRecipeForm={openRecipeForm}
        //                 />
        //             )}
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Header