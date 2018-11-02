import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchRecipes, displayRecipe } from '../actions/recipes';
import { Link, Redirect } from 'react-router-dom';
import SelectedRecipe from './SelectedRecipe';

export class Recipes extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }


  // handleClick(event) {
  //   console.log(event.target.getAttribute('key'));
  // }


  displayRecipe(recipe) {
    this.props.dispatch(displayRecipe(recipe));
    console.log('Hello');
    // this.props.history.push(`/SelectedRecipe`)
  }


  render() {
    const rec = this.props.recipes.recipes.map(recipes => {
      return recipes.ingeridents;
    });

    const ingeridents = rec.map(value => {
      <li>{value}</li>
    })

    // console.log('Recipe Props', this.props);
    // All Recipes Mapped 
    const allRecipes = this.props.recipes.recipes.map((recipe) => (
      <div key={recipe.id}>
        {/* <button
          type="button"
          onClick={() => this.props.history.push(`/SelectedRecipe/${recipe.id}`)}>{recipe.recipeName}
        </button> */}

        <button
          type="button"
          id={recipe.id}
          onClick={this.displayRecipe}>{recipe.recipeName}
          {/* onClick={() => this.props.dispatch(displayRecipe)}>{recipe.recipeName} */}
        </button>
        {/* onclick history push */}
      </div>
    ))


    return (
      <div className="recipe-parent">
        {allRecipes}
      </div>
    );
  }
}

Recipes.defaultProps = {
  title: 'This is default props for Recipes'
}
const mapsStateToProps = state => ({
  recipes: state.recipes,
  selected: state.recipes.recipes
});

export default connect(mapsStateToProps)(Recipes);