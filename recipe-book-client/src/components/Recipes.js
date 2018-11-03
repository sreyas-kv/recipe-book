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

  displayRecipe(recipe) {
    this.props.dispatch(displayRecipe(recipe));
    this.props.history.push(`/SelectedRecipe/${recipe.id}`,{recipe})                      
  }
  render() {
    const rec = this.props.recipes.recipes.map(recipes => {
      return recipes.ingeridents;
    });

    const ingeridents = rec.map(value => {
      <li>{value}</li>
    })
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
          onClick={() =>this.displayRecipe(recipe)}>{recipe.recipeName}
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

const mapStateToProps = state => ({
  recipes: state.recipes
});


// function mapStateToProps(state) {
//   console.log(state)
//   const { recipes } = state;
//   return { recipes };
// }

export default connect(mapStateToProps)(Recipes);