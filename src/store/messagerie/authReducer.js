import { authConstanst } from '../../Layout/Messagerie/actions/constants'

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    authenticating: false,
    authenticated: false,
    error: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case `${authConstanst.USER_LOGIN}_REQUEST`:
            state = {
                ...state,
                authenticating: true,
            }
            break
        case `${authConstanst.USER_LOGIN}_SUCCESS`:
            state = {
                ...state,
                ...action.payload.user,
                authenticated: true,
                authenticating: false,
            }
            break
        case `${authConstanst.USER_LOGIN}_FAILURE`:
            state = {
                ...state,
                authenticated: false,
                authenticating: false,
                error: action.payload.error,
            }
            break
        case `${authConstanst.USER_LOGOUT}_REQUEST`:
            break
        case `${authConstanst.USER_LOGOUT}_SUCCESS`:
            state = {
                ...initState,
            }
            break
        case `${authConstanst.USER_LOGOUT}_FAILURE`:
            state = {
                ...state,
                error: action.payload.error,
            }
            break
    }

    return state
}
export default authReducer
