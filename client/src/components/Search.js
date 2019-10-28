import React, { useState } from 'react'
import { withRecipeConsumer } from '../context'
import { Link } from 'react-router-dom'

const Search = ( {context: {searchRecipes}}) => {
    
    const [ingredients, setIngredients] = useState('')
    
    const handleChange = ({target: {value}}) => {
        setIngredients(value)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        searchRecipes(ingredients)
    }

    return  <>
            <div className="container section">
                <div className="row">
                    <div className="col s12 center-align">
                        <h2 className="title center">Search for Recipe With <a href="/" className="food2fork">Food2Fork</a></h2>
                        <h6>Type Recipes Seperated By Comma</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <i className="material-icons prefix">search</i>
                                <input 
                                    type="text" 
                                    id="icon_prefix" 
                                    onChange={handleChange}
                                />
                                <label htmlFor="icon_prefix">Search</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
}

export default withRecipeConsumer(Search)
