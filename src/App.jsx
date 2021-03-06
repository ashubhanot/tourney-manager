import React, { Component } from 'react';
import './App.css';
import { Route, Routes, Switch, Redirect } from 'react-router-dom';


import AuthPage from './pages/AuthPage/AuthPage'
import AllTournaments from './pages/AllTournaments/AllTournaments'
import Homepage from './pages/Homepage/Homepage'
import NewTournament from './pages/NewTournament/NewTournament'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import TournamentPage from './pages/TournamentPage/TournamentPage'
import NavBar from './components/NavBar/NavBar'


class App extends Component {

  state = {
    user:null,
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({user:null})
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
    console.log(incomingUserData)
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      let userDoc = JSON.parse(window.atob(token.split('.')[1])).user
      this.setState({user: userDoc}) 
      console.log(userDoc);     
    }
  }

  render() {
    console.log('in app render', this.state.user)
    return (
      
      <div className="App">
        {/* <div>User = {this.state.user}</div> */}
        {/* <NavBar user={this.state.user} handleLogout={this.handleLogout}/> */}
        {/* <Route path='/' render={(props) => (
            <Homepage {...props}/> */}
          {/* )}/> */}

        

        {this.state.user ?
          <div>
            <NavBar handleLogout={this.handleLogout} user={this.state.user}/>
            <br/>
            <Switch>
              <Route exact path='/' render={(props) => (
                <Homepage {...props}/>
              )}/>
              <Route path='/tournament/:id' render={(props) => (
                <TournamentPage {...props} />
              )}/>
              <Route path='/profile' render={(props) => {
                console.log('in profile route')
                return <ProfilePage {...props}/>
              }}/>
              <Route path='/new' render={(props) => (
                <NewTournament {...props} useridvalue={this.state.user}/>
              )}/>
              <Route path='/all' render={(props) => (
                <AllTournaments {...props}/>
              )}/>
            </Switch>
          </div>
          :
          <AuthPage setUserInState={this.setUserInState}/>
      }
      </div>
    );
  }
}

export default App;

