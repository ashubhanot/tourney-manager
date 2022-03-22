import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';


import AllTournaments from './pages/AllTournaments/AllTournaments'
import Homepage from './pages/Homepage/Homepage'
import NewTournament from './pages/NewTournament/NewTournament'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import TournamentPage from './pages/TournamentPage/TournamentPage'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path='/' render={(props) => (
            <Homepage {...props}/>
          )}/>
          <br/>
          <Route path='/tournament/:id' render={(props) => (
            <TournamentPage {...props}/>
          )}/>
          <br/>
          <Route path='/profile' render={(props) => (
            <ProfilePage {...props}/>
          )}/>
          <br/>
          <Route path='/new' render={(props) => (
            <NewTournament {...props}/>
          )}/>
          <br/>
          <Route path='/all' render={(props) => (
            <AllTournaments {...props}/>
          )}/>
      </div>
    );
  }
}

export default App;

