require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

const axios = require('axios')

app.use(cors())
app.use(bodyParser.json())

app.get('/api/recipes', async (req, res) => {
    
    try {
        const { data } = await axios.get(`https://www.food2fork.com/api/search?key=${process.env.API_KEY}`)
        res.json(data)
    } catch(err) {
        res.json({err: err.message})
    }
})

app.get('/api/recipes/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const { data } = await axios.get(`https://www.food2fork.com/api/get?key=${process.env.API_KEY}&rId=${id}`)
        // const { data:{ recipes } } = await axios.get(`/data.json`)
        // const recipe = recipes.filter(recipe => recipe.recipe_id === id)
        res.json(data)
    } catch(err) {
        res.json({err: err.message})
    }
})

app.post('/api/recipes/search', async (req, res) => {
    const { ingredients } = req.body

    try {
        const { data: {recipes} } = await axios.get(`https://www.food2fork.com/api/search?key=${process.env.API_KEY}&q=${ingredients}&sort=r`)
        res.json({recipes})
    } catch (error) {
        error.message = 'No recipes found'
        res.json({error: error.message})
    }
})

app.listen(4000, () => console.log('server listening on port 4000'))