import React from 'react';
import { connect } from 'react-redux';

// import { fetchSelectedRecipe } from '../actions/recipes';
// import Recipes from './Recipes'
import './selectedRecipe.css';

export class SelectedRecipe extends React.Component {
    render() {
        const recipeName = this.props.location.state.recipe.recipeName;
        const cookingTime = this.props.location.state.recipe.cookingTime;
        const ingeridents = this.props.location.state.recipe.ingeridents.map((ingerident, key) => (
            <li key={key}>
                {ingerident}
            </li>
        ));
        const directions = this.props.location.state.recipe.directions.map((direction, index) => (
            <li key={index}>
                {direction}
            </li>
        ))

        return (
            <div className="selected-recipe-parent">
                <div className="selected-h2">
                    <h2 className="recipename-h2"> {recipeName} </h2>
                </div>
                <div className="details-div">
                    <span className="cookingtime-span">Cooking time: {cookingTime}</span>
                    <p><strong className="ingeridents-strong">Ingeridents: </strong></p>
                    <ol type="1" className="ingeridents-list"> {ingeridents}</ol>
                    <p><strong className="directions-strong">Directions:</strong></p>
                    <ol type="1" className="directions-list"> {directions}</ol>
                    <div className="back-button">
                        <button type="button" className="go-back" onClick={() => this.props.history.goBack()}>Go Back</button>
                    </div>
                </div>
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