const initState = {
    user: {
        id: '',
        nom_complet: '',
        email: '',
        password: '',
        confirmed_password: '',
        user_type: '',
        niveau_ens: '',
        domaine_ens: '',
        niveau_edu: '',
        domaine_edu: '',
        etablissement: '',
        isNewUser: false,
    },
    step: 'auth',
    loader: false,
}

const UPDATE_SIGNUP_USER = 'UPDATE_SIGNUP_USER'
const UPDATE_SIGNUP_STEP = 'UPDATE_SIGNUP_STEP'
const RESET_STATE = 'RESET_STATE'
const SET_LOADER = 'SET_LOADER'

export const UpdateSignupUser = (payload) => ({
    type: UPDATE_SIGNUP_USER,
    payload,
})

export const UpdateSignupStep = (payload) => ({
    type: UPDATE_SIGNUP_STEP,
    payload,
})

export const ResetStateSignup = () => ({
    type: RESET_STATE,
})

export const SetLoader = (payload) => ({
    type: SET_LOADER,
    payload,
})

const SignUpReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_SIGNUP_USER:
            return {
                ...state,
                user: action.payload,
            }

        case UPDATE_SIGNUP_STEP:
            return {
                ...state,
                step: action.payload,
            }

        case RESET_STATE:
            return {
                ...state,
                step: 'auth',
                user: initState.user,
            }

        case SET_LOADER:
            return {
                ...state,
                loader: action.payload,
            }
    }

    return state
}

export default SignUpReducer
