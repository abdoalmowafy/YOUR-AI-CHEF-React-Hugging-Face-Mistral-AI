function addIngredient(formData, setIngredients) {
    const newIngredient = formData.get('ingredient');
    if (newIngredient.trim() !== "") {
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }
}


export function List(props) {
    return (
        <>
            {props.ingredients.length > 0 && <h2>Your Ingredients:</h2>}
            <ul>
                {props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
            </ul>
        </>
    );
}

export function AddForm(props) {
    return (
        <form action={(formData) => addIngredient(formData, props.setIngredients)}>
            <input type="text" name="ingredient" placeholder="e.g. All spices" />
            <button type="submit">+ Add ingredient</button>
        </form>
    )
}
