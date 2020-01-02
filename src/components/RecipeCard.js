import React from 'react'
import '../App.css';

class RecipeCard extends React.Component {
    render() {
        return (
            <div class="row" onClick={() => this.props.addRecipe ? this.props.addRecipe(this.props.id) : this.props.removeRecipe(this.props.id)}> 
         <div class="column">
            <div className="recipe-card" key={this.props.id}> 
                <img src={this.props.img} alt="YUMMMMMYYY FOOD"/>
                <h2>{this.props.name}</h2>
                <h3>{this.props.type}</h3>
                <h3>${this.props.price}</h3>
            </div>
        </div>
        </div>
        );
    }
}

export default RecipeCard