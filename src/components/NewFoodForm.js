import React from 'react';

class NewFoodForm extends React.Component {

    state = {}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(resp => {
                if (resp.errors) {
                    alert(resp.errors)
                } else {
                    this.setState({ })
                    this.props.history.push("/home")
                    // we could have this pessimistically add the review to the parent component but... I'm lazy
                }
            })
    }
    
    render(){
        return (
            <div className="new-food-form">
                <form className="new-food-form" onSubmit={this.handleSubmit}><br/>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Food Name"/><br/>
                    <input name="price" value={this.state.price} onChange={this.handleChange} placeholder="Food Cost" /><br/>
                    <input name="img" value={this.state.img} onChange={this.handleChange} placeholder="Food Image URL" /><br/>
                    <select value={this.state.type} name="type" onChange={this.handleChange}>
                        <option value="Entré">Entré</option>
                        <option value="BEEF">BEEF</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Candy">Candy</option>
                    </select>
                    <button className="button" type="submit">Create Food</button>
                </form>
            </div>
        );
    }
}

export default NewFoodForm;