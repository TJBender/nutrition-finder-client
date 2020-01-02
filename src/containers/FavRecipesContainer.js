import React from 'react'
import RecipeCard from '../components/RecipeCard'

class FavRecipesContainer extends React.Component {

    renderFavRecipes = () => {
        return this.props.recipes.map((recipe) => {
            if (recipe.inMyRecipes) {
                return <RecipeCard
                    key={recipe.id}
                    {...recipe}
                    removeRecipe={this.props.removeRecipe}
                />
            } else {
                return null
            }
        })
    }

    render(){
        return(
            <div className="favorites">
                {this.renderFavRecipes()}
            </div>
        )
    }
}

export default FavRecipesContainer