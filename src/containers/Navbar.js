import React from 'react'
import '../App.css';

class Navbar extends React.Component { 
    // some conditional rendering for what to show here on home or welcome page?
    clickLogout = () => {
        this.props.history.push("/")
    }

    clickNewFood = () => {
        this.props.history.push("/newfoodform")
    }

    render() {
        // console.log(this.props.loggedIn)
        const loggedIn = this.props.loggedIn
        
           if (!loggedIn) {
            return<div className="nav-bar"> 
                <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
                <div>
                    <button className="button">👤</button>
                </div>
                <div className="TwirlyApple">
                    <img id="apple" src={'https://saurabh-sharma.com/images/apple-cliparts-cartoon-11.png'} className="App-logo" alt="apple" />
                </div>
                <h1>Food Finder</h1>
                <div>
                    <button onClick={this.clickLogout} className="button">logout</button>
                    <button onClick={this.clickNewFood} className="button">new food</button>
                </div>
            </div>
           } 
           else {
              return <div className="nav-bar">
                   <div>
                       <button className="button">🍎</button>
                   </div>
                   <h1>Nutrition Finder</h1>
                   <div>
                       <button className="button">Login</button>
                   </div>
               </div>
           }

    }

}

export default Navbar