import React from 'react';
import './App.css';
import Welcome from './containers/Welcome';
import Home from './containers/Home';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Navbar from './containers/Navbar'
import NewFoodForm from './components/NewFoodForm'
import FavRecipesContainer from './containers/FavRecipesContainer'
import { Switch, Route, Link } from 'react-router-dom'


class App extends React.Component {

  state = {
    loggedIn: false
  }

  renderHomePage = (routerProps) => {
    return <Navbar 
      {...routerProps}
    />
  }

  renderSignupForm = (routerProps) => {
    return <SignupForm
      loggedIn={this.state.loggedIn}
      {...routerProps}
    />
  }

  renderLoginForm = (routerProps) => {
    return <LoginForm
      loggedIn={this.state.loggedIn}
      {...routerProps}
    />
  }

  renderWelcomePage = (routerProps) => {
    return <Welcome
      loggedIn={this.state.loggedIn}
      {...routerProps}
    />
  }

  renderFoodForm = (routerProps) => {
    return <NewFoodForm
      {...routerProps}
    />
  }


  render() {
    // console.log(this.state.recipes)
    return (
      <div className="App">
        {/* conditional rendering for home or welcome */}
        {/* if logged in (state) show HOME else not logged in (state) show WELCOME */}
            <Route path="" render={this.renderHomePage}/>
            <Switch>
              <Route path="/login" render={this.renderLoginForm} />
              <Route path="/signup" render={this.renderSignupForm} />
              <Route path="/newfoodform" render={this.renderFoodForm} />
              <Route exact path="/" render={this.renderWelcomePage} /> 
              <Route path="/home" render={()=> <Home />}/>
            </Switch>
      </div>

    );
  }

}

export default App;