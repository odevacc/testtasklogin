const SET_USER = 'SET_USER'

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return { ...state, ...action.payload }
        }

        default:
            return state
    }
}

const setUser = (username, password, isAuth) => ({ type: SET_USER, payload: { username, password, isAuth } })

export const login = (username, password) => {
    return setUser(username, password, true)
}

export default authReducer;