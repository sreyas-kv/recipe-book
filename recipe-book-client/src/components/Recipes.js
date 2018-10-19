import React from 'react';
import {connect} from 'react-redux';

import {fetchRecipes} from '../actions/actions';

export class Recipes extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchRecipes());
  }

  render(){
    console.log('PROPS:', this.props.recipes);
    // const rec =  this.props.recipes.map(recipes => {
    //   return recipes.ingeridents;
    // }); 
    // console.log('Rec: ', rec);


    // const ingeridents = rec.map(value => {
    //   <li>{value}</li>
    // })
    // console.log('ingeridents: ', ingeridents);

    //All Recipes Mapped 
    console.log('Props', this.props);
    const allRecipes = this.props.recipes.map((recipe,index) => (
      <div key={index}>
        <h2>{recipe.recipeName}</h2>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <p>Ingeridents:
        <ul>
        {recipe.ingeridents.map(bullet => <li>{bullet}</li>)}
        </ul></p>
        <p>Directions: 
        <ul>
        {recipe.directions.map(bullet => <li>{bullet}</li>)}
          </ul></p>
      </div>
    ));


    return (
      <div className="recipe-parent">
      {/* {allRecipes} */}
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
