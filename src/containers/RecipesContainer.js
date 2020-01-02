import React from 'react'
import RecipeCard from '../components/RecipeCard'

class RecipesContainer extends React.Component {

    renderRecipeCard = () => {
     return this.props.recipes.map((recipe)=>{
            return <RecipeCard
                        id={recipe.id}
                        name={recipe.name}
                        type={recipe.type}
                        price={recipe.price}
                        img={recipe.img}
                        addRecipe={this.props.addRecipe}
                    />
        })
    }

    render() {
        return (
            <div className="">
                {this.renderRecipeCard()}
            </div>
        )
    }
}

export default RecipesContainer