import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Nav from './Nav';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <RecipeList />
      </div>
    )
  }
}

export default RecipeApp;
