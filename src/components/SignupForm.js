import React from 'react';

class SignupForm extends React.Component {
    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.history.push("/home")
    }

    render() {
        // console.log(this.props)
        return (
            <div className="signup">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" />
                    <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password" />
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;