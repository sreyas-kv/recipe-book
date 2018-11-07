import React from 'react';
import { connect } from 'react-redux';

import { fetchSelectedRecipe } from '../actions/recipes';
import Recipes from './Recipes'

export class SelectedRecipe extends React.Component {
    // componentWillMount() {
    //     this.props.dispatch(fetchSelectedRecipe(this.props.match.params.id))

    // };

    returnBack() {
        console.log(this.props)
        // this.props.history.goBack();
        
    }

    render() {
        console.log('namet', this.props.location.state.recipe)
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
        // console.log('Selected Props: ', this.props.location.state.recipe.ingeridents)


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
    recipes: state.recipes,
});





export default connect(mapStateToProps)(SelectedRecipe);