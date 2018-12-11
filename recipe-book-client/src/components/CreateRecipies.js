import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { createRecipe } from '../actions/createRecipes';
import Input from './Input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import './createRecipe.css';

import { required, nonEmpty } from './validator';

export class CreateRecipes extends React.Component {

    onSubmit(values) {
        const { recipeName, ingeridents, cookingTime, directions } = values;
        const createMethod = { recipeName, ingeridents, cookingTime, directions };
        // this.props.dipatch(createRecipe(createMethod));
        console.log('createMethod: ', createMethod);
        console.log('Props: ', this.props);
        this.props.createRecipe(createMethod);
        this.props.history.push('/recipes');
    }
    // backToRecipes = () => {
    //     <Redirect to='/Recipes' />
    // }

    render() {
        const renderField = ({ input, label, type, meta: { touched, error } }) =>
            <span className="addIngerident-span">
                <input {...input} type={type} placeholder={label} className="ingerident-input" />
                {touched &&
                    error &&
                    <span>
                        {error}
                    </span>}
            </span>

        const renderIngerident = ({ fields, meta: { error } }) =>
            <div className="addIngredients-div">
                <button className="add-ingredients" type="button" onClick={() => fields.push()}>add ingeridents</button>
                {fields.map((ingerident, index) =>
                    <div className="addOption-div" key={index}>
                        <Field
                            name={ingerident}
                            type="text"
                            component={renderField}
                            label={`Ingerident ${index + 1}`}
                        />
                        <button
                            type="button"
                            className="remove-ingredient"
                            title="Remove ingerident"
                            onClick={() => fields.remove(index)}>remove ingredient</button>
                    </div>
                )}
                {error &&
                    <li className="error">
                        {error}
                    </li>}
            </div>

        const renderDirections = ({ fields, meta: { error } }) =>
            <div className="addInstructions-div">
                <button className="add-instructions" type="button" onClick={() => fields.push()}>add instructions</button>
                {fields.map((direction, index) =>
                    <div className="directions-div" key={index}>
                        <Field
                            name={direction}
                            type="text"
                            component={renderField}
                            label={`Step ${index + 1}`}
                        />
                        <button
                            type="button"
                            className="remove-instruction"
                            title="Remove instruction"
                            onClick={() => fields.remove(index)}>remove instruction</button>
                    </div>
                )}
                {error &&
                    <li className="error">
                        {error}
                    </li>}
            </div>

        return (
            <div className="form-div">
                <form
                    className="createRecipe-form"
                    onSubmit={
                    this.props.handleSubmit(values => {
                             this.onSubmit(values);
                         })}>
                    <Field className="recipename" component={Input} type="text" name="recipeName" placeholder="Enter recipe name" validate={[required, nonEmpty]} />
                    <Field className="cookingtime" component={Input} type="text" name="cookingTime" id="cookingTime" placeholder="Coocking time" validate={[required, nonEmpty]} />
                    <FieldArray name="ingeridents" component={renderIngerident} />
                    <FieldArray name="directions" component={renderDirections} />
                    <button
                        type="submit"
                        className="done"
                        disabled={this.props.pristine || this.props.submitting}
                    // onClick={() => this.props.history.push('/recipes')}
                    // onClick={() => this.backToRecipes()}
                    > done </button>

                    <button className="back" type="button" onClick={() => this.props.history.goBack()}>go back</button>
                </form>

            </div>
        )
    }
}

// export default reduxForm({
//     form: 'createRecipe',
//     onSubmitFail: (error, dispatch) => { if (error) { dispatch(focus('createRecipe', Object.keys(error)[0])) } }
// })(CreateRecipes);


CreateRecipes.propTypes = {
    createRecipe: PropTypes.func.isRequired
};

// export default connect(null, { createRecipe })(CreateRecipes);

CreateRecipes = connect(
    null, { createRecipe })(CreateRecipes);

export default reduxForm({
        form: 'createRecipe'
    })(CreateRecipes);