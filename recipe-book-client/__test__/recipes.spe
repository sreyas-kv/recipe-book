import React from 'react';
import { shallow } from 'enzyme';
// import Recipes from '../components/Recipes';
import { fetchRecipes, displayRecipe } from '../actions/recipes';
import { connect } from 'react-redux';
import { Recipes } from '../components/Recipes';

const mockFetchRecipeAction = {
    type: 'FETCH_RECIPES_SUCCESS'
};
jest.mock('../actions/recipes', () => Object.assign({},
    require.requireActual('../actions/recipes'),
    {
        fetchRecipes: jest.fn().mockImplementation(() => {
            return mockFetchRecipeAction;
        })
    }
));

describe('<Recipes/>', () => {

    const dummyProps = {
        recipes: {
            recipeName: "Banana Smoothie",
            ingeridents: [
                "1 Big Banana Peeled Cored And Chopped",
                "1 Tsp Powdered Almonds"
            ],
            cookingTime: "10 mins",
            directions: [
                "Blend All Ingredients Except Cinnamon Well Until Smooth",
                "Pour Smoothie In Cold Glass, Top With Cinnamon And Serve Immediately"
            ]
        }
    }
    const component = shallow(<Recipes{...dummyProps} />);

    it('should contain the Button', () => {
        expect(item.find('.recipes-list').length).toEqual(1);
    });

});