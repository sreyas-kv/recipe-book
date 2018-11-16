import React from 'react';
import { Field, FieldArray, reduxForm, focus } from 'redux-form';
import { createRecipe } from '../actions/createRecipes';
import Input from './Input';
import { connect } from 'react-redux';
import { addIngredients } from '../actions/recipes'

// import createRecipe from '../actions/createRecipes';

import { required, nonEmpty, matches, length, isTrimmed } from './validator';

export class CreateRecipes extends React.Component {
    onSubmit(values) {
        const { recipeName, ingeridents, cookingTime, directions } = values;
        console.log(values);
        const createMethod = { recipeName, ingeridents, cookingTime, directions };
        console.log(createMethod);
        return this.props
            .dipatch(createRecipe(createMethod))
    }

    render() {
        const renderMembers = ({ fields, meta: { touched, error } }) => (
            <div>
                <button type="button" onClick={() => fields.push({})}>Add ingerident</button>
                {touched && error && <span>{error}</span>}
                {fields.map((member, index) =>
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove ingerident"
                            onClick={() => fields.remove(index)}>Remove ingerident</button>
                        <h4>Ingerident #{index + 1}</h4>
                        <Field
                            component={Input}
                            name={`${member}`}
                            // name="ingeridents"
                            type="text"
                            label="ingeridents"
                             />

                    </li>
                )}
            </div>
        )

        return (
            <form
                className="createRecipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {/* <label htmlFor="recipeName">Recipe Name</label> */}
                <Field component={Input} type="text" name="recipeName" className="recipeName" placeholder="Recipe Name" label="Recipe Name " validate={[required, nonEmpty]} /><br />
                {/* <label htmlFor="cookingTime">cooking Time</label> */}
                <Field component={Input} type="text" name="cookingTime" id="cookingTime" placeholder="Coocking Time" label="cooking Time" validate={[required, nonEmpty]} />
                {/* <label htmlFor="ingeridents">Ingeridents</label> */}
                <div className="ingeridents-div">
                    {/* <Field component={Input} type="text" name="ingeridents" id="ingeridents" placeholder="Ingeridents" label="Ingeridents" validate={[required, nonEmpty]} /> */}
                    <FieldArray name="ingeridents" component={renderMembers} />
                    {/* <button 
            type="button" onClick={() => this.addIngeridents()}>+</button> */}
                </div>
                {/* <label htmlFor="direction">Directions</label> */}
                <Field component={Input} type="text" name="directions" id="directions" label="Directions" validate={[required, nonEmpty]} />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>Create Recipe</button>
            </form>

        )
    }
}

export default reduxForm({
    form: 'createRecipe',
    onSubmitFail: (error, dispatch) => { if (error) { dispatch(focus('createRecipe', Object.keys(error)[0])) } }
})(CreateRecipes);
