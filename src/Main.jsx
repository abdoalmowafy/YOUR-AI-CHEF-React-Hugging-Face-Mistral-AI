import { List, AddForm } from "./components/List";
import { useState } from "react";
import { Recipes } from "./components/Recipes";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    return (
        <main>
            <AddForm setIngredients={setIngredients} />
            <List ingredients={ingredients} />
            {ingredients.length > 4 && <Recipes ingredients={ingredients} />}
        </main>
    );
}
