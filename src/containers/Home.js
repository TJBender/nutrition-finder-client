import React from 'react'
import RecipeCard from '../components/RecipeCard'
import FavRecipesContainer from './FavRecipesContainer' // then these guys get recipe card
import RecipesContainer from './RecipesContainer' // then these guys get recipe card

class Home extends React.Component {
    
    state = {
        recipes: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/recipes")
            .then(res => res.json())
            .then((recipes) => {
                this.setState({ recipes })
            })

    }

    addRecipe = (id) => {
        let newRecipes = this.state.recipes.map((recipe) => {
            if (recipe.id === id) {
                // if the bot id matches the id of the card you clicked on...
                // add a new key (inMyArmy)
                return { ...recipe, inMyRecipes: true }
            } else {
                // otherwise return the bot obj without any key
                return recipe
            }
        })
        // reset state to hold the new bots 
        this.setState({ recipes: newRecipes })
    }

    removeRecipe = (id) => {
        let removedRecipes = this.state.recipes.map((recipe) => {
            if (recipe.id === id) {
                return { ...recipe, inMyRecipes: false }
            } else {
                return recipe
            }
        })
        this.setState({ recipe: removedRecipes })
    }



    render() {
        // console.log(this.props.recipes)
        return (
            <div> 
                <FavRecipesContainer recipes={this.state.recipes} removeRecipe={this.removeRecipe}/>
                <RecipesContainer recipes={this.state.recipes} addRecipe={this.addRecipe}/>
            </div>


        )
    }
}
export default Home
