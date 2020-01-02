import React from 'react'


class Welcome extends React.Component {

    clickLogin = () => {
        this.props.history.push("/login")
    }

    clickSignup = () => {
        this.props.history.push("/signup")
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.clickLogin}className="button" type="login"> login </button> 
                <button onClick={this.clickSignup}className="button" type="signup"> signup</button>
            </div>
        )
    }
}
export default Welcome
