import React from 'react'
import { reduxForm } from 'redux-form'
import Login from './Login'
import { validate } from '../utils/validate'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { login } from '../../store/reducers/authReducer'

const LoginForm = reduxForm({ form: 'login', validate })(Login)

const LoginSupp = ({ isAuth, login }) => {
    const onSubmit = (values) => {
        const { username, password } = values
        login(username, password)
    }
    if (isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { login })(LoginSupp)


