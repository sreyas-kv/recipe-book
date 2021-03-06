import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, displayRecipe } from '../actions/recipes';
import { Link } from 'react-router-dom';

import './recipes.css';

export class Recipes extends React.Component {
  constructor(props) {
    super()
    this.state = {
      length: 0,
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipes.recipes.length === prevProps.recipes.recipes.length) {
       this.props.dispatch(fetchRecipes());
    }
  }

  displayRecipe(recipe) {
    this.props.dispatch(displayRecipe(recipe));
    this.props.history.push(`/SelectedRecipe/${recipe.id}`, { recipe });
  }
  render() {
    const allRecipes = this.props.recipes.recipes.map((recipe) => (
      <div className="recipe-button-div" key={recipe.id}>
        <button
          type="button"
          className="recipes-list"
          id={recipe.id}
          onClick={() => this.displayRecipe(recipe)}>{recipe.recipeName.toUpperCase()}
        </button>
      </div>
    ))
    return (
      <div className="recipe-parent">
        <div className="create-link-parent">
          <div className="inside-add">
            <Link to="/CreateRecipe" className="createRecipe-link">add new recipe now</Link>
          </div>
          <div className="logout inside-add ">
          <Link to="/" className="logout-link createRecipe-link">logout</Link>
          </div>
        </div>
        <div className="recipes-container">
          {allRecipes}
        </div>
      </div>
    );
  }
}

Recipes.defaultProps = {
  title: 'This is default props for Recipes',
  recipeLength: 0,
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(Recipes);