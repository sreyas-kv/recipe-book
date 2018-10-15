import React from 'react';
import {connect} from 'react-redux';

import {fetchRecipes} from '../actions/actions';

export class Recipes extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchRecipes());
  }

  render(){

    const rec =  this.props.recipes.map(recipes => {
      return recipes.ingeridents;
    }); 
    console.log('Rec: ', rec);


    const ingeridents = rec.map(value => {
      <li>{value}</li>
    })
    console.log('ingeridents: ', ingeridents);


    //All Recipes Mapped 
    const allRecipes = this.props.recipes.map((recipe,index) => (
      <div key={index}>
        <h2>{recipe.recipeName}</h2>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <p>Ingeridents:
        <li>{recipe.ingeridents}</li></p>
        <p>Directions: 
        <li>{recipe.directions}</li></p>
      </div>
    ));

   

    return (
      <div className="recipe-parent">
      {allRecipes}
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
