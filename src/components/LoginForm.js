import React from 'react'

class LoginForm extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    clickLogin = () => {
        this.props.history.push("/home")
        this.setState({loggedIn: true})
    }

    

    render(){
        // console.log(this.props)
        return (
            <div className="login">
                <form className="auth-form" onSubmit={ this.clickLogin}>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" />
                    <button type="submit" className="button">Submit</button>
                </form>
            </div>
        );
    }

}

export default LoginForm