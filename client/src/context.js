import React, { Component, createContext } from 'react'
import axios from 'axios'
import api from './services/api'

const RecipeContext = createContext()

class RecipeProvider extends Component {

    state = {
        recipes: [],
        search: false,
        error: null
    }
    
   componentDidMount() {
        //make api call to get top 30 recipes
      this.getTopRecipes()
    }
    
    getTopRecipes = async () => {
        try {
            // const {data: { recipes }} = await axios.get('/data.json')
            const { recipes } = await api.call('get', 'recipes')
            console.log(recipes)
            //added the if statement to prevent app from breaking when food2fork 
            // API request limit has been met
            if (recipes)
                this.setState({ 
                    recipes,
                    search: false,
                    error: null
                })
            else 
                this.setState({error: "API request limit has been reached"})
        } catch (error) {
            console.log({error: error.message})            
        }
    }

     getRecipe = async id => {
        try {
            const { data: { recipe } } = await axios.get('/recipe.json')
            // const { recipe } = await api.call('get', `recipes/${id}`)
            return recipe
        } catch (error) {
            console.log({error: "recipe not found"})
        }
    }

    searchRecipes = async ingredients => {
        if (ingredients !== "") {
            try {
                const { recipes } = await api.call('post', 'recipes/search', {ingredients})
                if (recipes.length)
                    this.setState({ 
                        recipes,
                        search: true,
                        error: null
                    })
                else
                    this.setState({error: "Sorry, your search did not return any results"})
            } catch (error) {
                console.log(error)            
            }
        } else {
            this.getTopRecipes()
        }
    }

    render() {
        return  <RecipeContext.Provider value={{
                    ...this.state,
                    searchRecipes: this.searchRecipes,
                    getRecipe: this.getRecipe
                    }}
                >
                    {this.props.children}
                </RecipeContext.Provider>
    }
}

const RecipeConsumer = RecipeContext.Consumer

const withRecipeConsumer = Component => props => (
    <RecipeContext.Consumer>            
        { value => <Component {...props} context={value} />}
    </RecipeContext.Consumer>            
)

export { RecipeProvider, RecipeContext, RecipeConsumer, withRecipeConsumer }
