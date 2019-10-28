import React from 'react'
import Recipe from './Recipe'
import { withRecipeConsumer } from '../context'

const RecipeList = ({ context: {recipes, search, error} }) => {
    
    if (error)
        return  <h3 className="center"> {error} </h3>

    return  <>  
            <div className="container section">
                <h3 className="center"> { search ? "Search Results" : "Top 30 Recipes" }</h3>
                <div className="row">
                    {recipes.map(recipe => (
                        <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        />  
                    ))}
                </div>
            </div>
            </>
}

export default withRecipeConsumer(RecipeList)
