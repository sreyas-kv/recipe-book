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
    this.props.history.push(`/SelectedRecipe/${recipe.id}`, { recipe })
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

        {/* <p><a href="" className="-link" id={recipe.id} onClick={() => this.displayRecipe(recipe)}>{recipe.recipeName}</a></p> */}

        <button
          type="button"
          className="recipes-list"
          id={recipe.id}
          onClick={() =>this.displayRecipe(recipe)}>{recipe.recipeName}
        </button>

      </div>
    ))


    return (
      <div className="recipe-parent">
        {allRecipes}
        <Link to="/CreateRecipe" className="createRecipe-link">Create Recipe</Link>
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