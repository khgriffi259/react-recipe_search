import React, { Component } from 'react'
import { withRecipeConsumer } from '../../context'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Details extends Component {
    
    state = {
        recipe: {},
        loading: true,
        error: null
    }

    async componentDidMount(){
        const { getRecipe } = this.props.context
        try {
            const recipe  = await getRecipe(this.props.match.params.recipeId)
            // const { data: { recipe } } = await axios.get('/recipes.json')
            this.setState({
                recipe,
                loading: false
            })
        } catch (error) {
            console.log(error)
            this.setState({
                loading: false,
                error: error.message
            })
        }
    }
    
    render() {
        const { recipe: {f2f_url, image_url, publisher, title, source_url, ingredients}, loading, error } = this.state
       
        if (loading) return <div> Loading </div>
        if (error) return <div> {error} </div>
        
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
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn-large blue white-text mr-1">Publisher Webpage</a>
                            <a href={f2f_url} target="_blank" rel="noopener noreferrer" className="btn-large green white-text">Recipe Url</a>
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
