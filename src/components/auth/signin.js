import React, { Component } from 'react'

import { reduxForm} from 'redux-form'
import SignInForm from './signinForm'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className="sign-in">

                   <SignInForm onSubmit = {this.onSubmit} className= 'sign-in__form'/>
                
            </div>
        )
    }
}



export default SignIn