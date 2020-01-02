import React from 'react'
import '../App.css';

class RecipeCard extends React.Component {
    render() {
        return (
            <div className="recipe-card" key={this.props.id} onClick={() => this.props.addRecipe ? this.props.addRecipe(this.props.id) : this.props.removeRecipe(this.props.id)}> 
                <img src={this.props.img} alt="YUMMMMMYYY FOOD"/>
                <h3>{this.props.name}</h3>
                <h4>{this.props.type}</h4>
                <h3>${this.props.price}</h3>
                <button class="small-button">edit</button><button class="small-button"> delete</button>
            </div>
        );
    }
}

export default RecipeCard