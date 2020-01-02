import React from 'react'

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
                       <button className="button">Welcome</button>
                   </div>
               </div>
           }

    }

}

export default Navbar