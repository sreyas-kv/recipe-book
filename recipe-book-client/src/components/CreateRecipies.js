import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createRecipe} from '../actions/createRecipes';
import Input from'./Input';
import {connect} from 'react-redux';

// import createRecipe from '../actions/createRecipes';

import {required, nonEmpty, matches, length, isTrimmed} from './validator';

export class CreateRecipes extends React.Component {
    onSubmit(values){
        console.log('Submit Test');
        const {recipeName, ingeridents, cookingTime, directions} = values;
        console.log(values);
        const createMethod = {recipeName, ingeridents, cookingTime, directions};
        console.log(createMethod);
        return this.props
        .dipatch(createRecipe(createMethod))
    }

    addIngeridents(){
    //     this.props.counter ++;
    //     {this.props.map(input => <FormInput key={input} />)}
    // console.log('Testing');
    this.props.inputs.push(<Field type="text" />)
    console.log('Values:',this.props.inputs)
    }

    render(){
        return(
            <form  
            className="createRecipe-form"
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
            {/* <label htmlFor="recipeName">Recipe Name</label> */}
            <Field component={Input} type="text" name="recipeName" className="recipeName" placeholder="Recipe Name" label="Recipe Name " validate={[required, nonEmpty]} /><br/>
            {/* <label htmlFor="cookingTime">cooking Time</label> */}
            <Field component={Input} type="text" name="cookingTime" id="cookingTime" placeholder="Coocking Time" label="cooking Time" validate={[required, nonEmpty]} />
            {/* <label htmlFor="ingeridents">Ingeridents</label> */}
            <div className="ingeridents-div">
            {/* <Field component={Input} type="text" name="ingeridents" id="ingeridents" placeholder="Ingeridents" label="Ingeridents" validate={[required, nonEmpty]} /> */}
            {this.props.inputs.map((input) => <Field type="text" key={input} />)}
            <button 
            type="button" onClick={() => this.addIngeridents()}>+</button>
            </div>
            {/* <label htmlFor="direction">Directions</label> */}
            <Field component={Input} type="text" name="directions" id="directions" label="Directions" validate={[required, nonEmpty]} />
            <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>Create Recipe</button>
            <h1>{console.log('Counter',this.props.counter)}</h1>
            </form>
           
            
        )
    }
}

export default reduxForm({
    counter: 1,
    inputs: [ <Field component={Input} type="text" name="ingeridents" id="ingeridents" placeholder="Ingeridents" label="Ingeridents" validate={[required, nonEmpty]} />],
    form: 'createRecipe',
    onSubmitFail: (error, dispatch) => {if(error){dispatch(focus('createRecipe', Object.keys(error)[0]))}}
})(CreateRecipes);
