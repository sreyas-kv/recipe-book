import React from 'react';
import { connect } from 'react-redux';

import { fetchSelectedRecipe } from '../actions/recipes';
import Recipes from './Recipes'

export class SelectedRecipe extends React.Component {


    render() {
        const recipeName = this.props.location.state.recipe.recipeName;
        const cookingTime = this.props.location.state.recipe.cookingTime;
        const ingeridents = this.props.location.state.recipe.ingeridents.map((ingerident, key) => (
            <p key={key}>
                {ingerident}
            </p>
        ));
        const directions = this.props.location.state.recipe.directions.map((direction, index) => (
            <li key={index}>
                {direction}
            </li>
        ))

        return (
            <div className="recipe-parent">
                <h2 className="recipename-h2"> {recipeName} </h2>
                <span className="cookingtime-span">Cooking time: {cookingTime}</span>
                <p><strong className="ingeridents-strong">Ingeridents: </strong></p>
                <ol type="1"> {ingeridents}</ol>
                <p><strong className="directions-strong">Directions:</strong></p>
                <ol type="1">{directions}</ol>
                <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
            </div>
        );
    }
}

SelectedRecipe.defaultProps = {
    title: 'This is selected Recipe'
}

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(SelectedRecipe);