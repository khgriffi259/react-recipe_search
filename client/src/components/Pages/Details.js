import React, { Component } from 'react'
import { withRecipeConsumer } from '../../context'
import { Link } from 'react-router-dom'

class Details extends Component {
    
    state = {
        recipe: {},
        loading: true
    }

    async componentDidMount(){
        try {
            const { getRecipe } = this.props.context
            const recipe = await getRecipe(this.props.match.params.recipeId)
            this.setState({
                recipe,
                loading: false
            })
        } catch (error) {
            console.error({error: error.message})
        }
    }
    
    
    render() {

        const { recipe: {f2f_url, image_url, publisher, recipe_id, title, source_url, ingredients}, loading } = this.state

        if (loading) return <div> Loading </div>

        return  <>
                <div className="details container section">
                    <div className="row">
                        <div className="col s12 l6 ">
                            <Link to="/" className="btn-large orange black-text mt-1" >Back To Recipe List</Link>
                            <br/>
                                <img src={image_url} alt={title} />
                        </div>
                        <div className="col s12 l6">
                            <h3 className="flow-text">{title}</h3>
                            <h3 className="flow-text yellow-text">{`Provided By ${publisher}`}</h3>
                            <a href={source_url} target="_blank" className="btn-large blue white-text mr-1">Publisher Webpage</a>
                            <a href={f2f_url} target="_blank" className="btn-large green white-text">Recipe Url</a>
                            <h1>Ingredients</h1>
                            <ul className="collection">
                                {ingredients.map((ingredient, i) => 
                                    <li className="collection-item" key={i}>{ingredient}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                </>
}
}

export default withRecipeConsumer(Details)
