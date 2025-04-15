import { useState } from "react";
import getRecipeFromMistral from "../HuggingFace";
import ReactMarkdown from "react-markdown";
import robotChef from "../assets/robot-chef.png";

async function RequestRecipe(e, ingredients, setRecipe) {
    const button = e.currentTarget;
    button.disabled = true;
    button.innerHTML = `Generating recipe... <span class="spinner"></span>`;
    button.style.cursor = "default";

    setRecipe(await getRecipeFromMistral(ingredients));
    button.textContent = "Recipe generated!";
    button.style.backgroundColor = "green";

    setTimeout(() => {
        button.disabled = false;
        button.textContent = "Get a recipe";
        button.style.backgroundColor = "black";
        button.style.cursor = "pointer";
    }, 5000);

}



export function Recipes(props) {
    const [recipe, setRecipe] = useState("");

    return (
        <div className="recipes-container">
            <div className="request-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={async (e) => await RequestRecipe(e, props.ingredients, setRecipe)}>Get a recipe</button>
            </div>


            {recipe?.trim() !== "" && <>
                <div>
                    <h3>Generated Recipe</h3>
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                </div>
                <img className="robot-chef-photo" src={robotChef} alt="robot chef photo" />
            </>}
        </div>
    )
}

