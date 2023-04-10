import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './users/UserItems';
import GithubIcon from './icons/githubicon/GithubIcon';
import './App.css';


class App extends Component {
    render() {
    const name = 'John Doe';
    const loading = true;
    const showName = true;
    return (
      <div className="App">
        {loading ? <h4>loading...</h4> : <h1>Hello {showName && name.toUpperCase()}</h1> }
        <UserItem/>        
        <GithubIcon/><Navbar title='Github Finder' icon='fab fa-github'/>
      </div>
    );
  } 
}

export default App;
