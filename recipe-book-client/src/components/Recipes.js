import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../actions/recipes';

export class Recipes extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const rec = this.props.recipes.recipes.map(recipes => {
      return recipes.ingeridents;
    });


    const ingeridents = rec.map(value => {
      <li>{value}</li>
    })

    // All Recipes Mapped 
    const allRecipes = this.props.recipes.recipes.map((recipe,index) => (
      <div key={index}>
        <h2>{recipe.recipeName}</h2>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <span><strong>Ingeridents</strong>:
        <ul>
        {recipe.ingeridents.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul></span>
        <span><strong>Directions</strong>:
        <ul>
        {recipe.directions.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul></span>
      </div>
    ));

    return (
      <div className="recipe-parent">
        {allRecipes}
        <h1>Hello World</h1>
      </div>
    )
  }
}

Recipes.defaultProps = {
  title: 'This is default props for Recipes'
}
const mapsStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapsStateToProps)(Recipes);
