import React, { Component } from 'react'

import { reduxForm} from 'redux-form'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { className} = this.props
        return (
            <form className= {`${className}sign-in-form`}>

                   sign in
                
            </form>
        )
    }
}

SignIn = reduxForm({
    form: 'SignInForm'
})(SignInForm)

export default SignInForm