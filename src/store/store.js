import { combineReducers, createStore } from "redux";
import {reducer as formReducer} from 'redux-form'
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers)

export default store;