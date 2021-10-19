import React, { Component } from 'react'

import { reduxForm, Field} from 'redux-form'
import {FormInput, FormButton} from '../formFields'

class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { className, handleSubmit} = this.props
        return (
            <form onSubmit = {handleSubmit} className= {`${className}sign-in-form`}>

                <Field className= 'sign-in-form__email' 
                type= 'email' 
                name = 'email' 
                title = 'Email' 
                placeholder = 'Email' 
                component={FormInput}/>

                <Field className= 'sign-in-form__password' 
                type= 'password' 
                name = 'password' 
                title = 'Password' 
                placeholder = 'Password' 
                component={FormInput}/>

                <Field className= 'sign-in-form__password' 
                onClick = {() => console.log('tryna submit')}
                type= 'login' 
                name = 'login' 
                title = 'Login' 
                component={FormButton}/>


                
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm