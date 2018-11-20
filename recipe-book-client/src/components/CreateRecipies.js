import React from 'react';
import { Field, FieldArray, reduxForm, focus } from 'redux-form';
import { createRecipe } from '../actions/createRecipes';
import Input from './Input';
import { connect } from 'react-redux';
import { addIngredients } from '../actions/recipes';


// import createRecipe from '../actions/createRecipes';

import { required, nonEmpty, matches, length, isTrimmed } from './validator';

export class CreateRecipes extends React.Component {

    onSubmit(values) {
        const { recipeName, ingeridents, cookingTime, directions } = values;
        // console.log('Values',values);
        const createMethod = { recipeName, ingeridents, cookingTime, directions };
        this.props.dipatch(createRecipe(createMethod))
        this.props.history.push('/recipes');
    }

    render() {

        const renderField = ({ input, label, type, meta: { touched, error } }) =>
            <div>
                <label>
                    {label}
                </label>
                <div>
                    <input {...input} type={type} placeholder={label} />
                    {touched &&
                        error &&
                        <span>
                            {error}
                        </span>}
                </div>
            </div>
        const renderIngerident = ({ fields, meta: { error } }) =>
            <div>
                <button type="button" onClick={() => fields.push()}>Add Ingeridents</button>
                {fields.map((ingerident, index) =>
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove ingerident"
                            onClick={() => fields.remove(index)}>Remove Ingerident</button>
                        <Field
                            name={ingerident}
                            type="text"
                            component={renderField}
                            label={`Ingerident ${index + 1}`}
                        />
                    </li>
                )}
                {error &&
                    <li className="error">
                        {error}
                    </li>}
            </div>

        const renderDirections = ({ fields, meta: { error } }) =>
            <div>
                <button type="button" onClick={() => fields.push()}>Add Directions</button>
                {fields.map((direction, index) =>
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove direction"
                            onClick={() => fields.remove(index)}>Remove Direction</button>
                        <Field
                            name={direction}
                            type="text"
                            component={renderField}
                            label={`Step ${index + 1}`}
                        />
                    </li>
                )}
                {error &&
                    <li className="error">
                        {error}
                    </li>}
            </div>



        return (
            <div class="form-div">
            <form
                className="createRecipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {/* <label htmlFor="recipeName">Recipe Name</label> */}
                <Field component={Input} type="text" name="recipeName" className="recipeName" placeholder="Recipe Name" label="Recipe Name " validate={[required, nonEmpty]} /><br />
                {/* <label htmlFor="cookingTime">cooking Time</label> */}
                <Field component={Input} type="text" name="cookingTime" id="cookingTime" placeholder="Coocking Time" label="cooking Time" validate={[required, nonEmpty]} />
                <div className="ingeridents-div">
                    {/* <Field component={Input} type="text" name="ingeridents" id="ingeridents" placeholder="Ingeridents" label="Ingeridents" validate={[required, nonEmpty]} /> */}
                    <FieldArray name="ingeridents" component={renderIngerident} />

                    {/* <Field component={Input} type="text" name="directions" id="directions" label="Directions" validate={[required, nonEmpty]} /> */}
                    <FieldArray name="directions" component={renderDirections} />
                </div>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>Create Recipe</button>
            </form>
            <button type="button" onClick={() => this.props.history.goBack()}>Go Back</button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'createRecipe',
    onSubmitFail: (error, dispatch) => { if (error) { dispatch(focus('createRecipe', Object.keys(error)[0])) } }
})(CreateRecipes);
