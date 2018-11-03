import React from 'react';
import { connect } from 'react-redux';

import { fetchSelectedRecipe } from '../actions/recipes';
import Recipes from './Recipes'

export class SelectedRecipe extends React.Component {
    // componentWillMount() {
    //     this.props.dispatch(fetchSelectedRecipe(this.props.match.params.id))
       
    // };
    
    render() {

        // const rec = this.props.recipes.recipes.map(recipes => {
        //     return recipes.ingeridents;
        // });
        // const ingeridents = rec.map(value => {
        //     <li>{value}</li>
        // })
        // // All Recipes Mapped 
        // const allRecipes = this.props.recipes.recipes.map((recipe, index) => (
        //     <div key={index} id={recipe.id}>
        //         <h2>{recipe.recipeName}</h2>
        //         <p>Cooking Time: {recipe.cookingTime}</p>
        //         <span><strong>Ingeridents</strong>:
        // <ul>
        //                 {recipe.ingeridents.map((bullet, index) => <li key={index}>{bullet}</li>)}
        //             </ul></span>
        //         <span><strong>Directions</strong>:
        // <ul>
        //                 {recipe.directions.map((bullet, index) => <li key={index}>{bullet}</li>)}
        //             </ul></span>

        //     </div>

        // ));

        console.log('Selected Props: ',this.props)
        // console.log(this.props.match.params.id)
        // console.log('Selected REcipe', this.props)


        return (
            <div className="recipe-parent">
                {/* {allRecipes} */}
            </div>
        );
    }
}

SelectedRecipe.defaultProps = {
    title: 'This is selected Recipe'
}

const mapStateToProps = state => ({
    recipes: state.recipes,
    selected: state.recipes
});





export default connect(mapStateToProps)(SelectedRecipe);