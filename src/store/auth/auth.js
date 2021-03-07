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

    failedAuth: false,
    loader: false,
}

const UPDATE_SIGNUP_USER = 'UPDATE_SIGNUP_USER'
const RESET_STATE = 'RESET_STATE'
const SET_LOADER_AUTH = 'SET_LOADER_AUTH'
const SET_FAILED_AUTH = 'SET_FAILED_AUTH'

// export const UpdateSignupUser = (payload) => ({
//     type: UPDATE_SIGNUP_USER,
//     payload,
// })

// export const UpdateSignupStep = (payload) => ({
//     type: UPDATE_SIGNUP_STEP,
//     payload,
// })

// export const ResetStateSignup = () => ({
//     type: RESET_STATE,
// })

export const SetLoader = (payload) => ({
    type: SET_LOADER_AUTH,
    payload,
})

export const SetFailedAuth = (payload) => ({
    type: SET_FAILED_AUTH,
    payload,
})

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        // case UPDATE_SIGNUP_USER:
        //     return {
        //         ...state,
        //         user: action.payload,
        //     }

        // case UPDATE_SIGNUP_STEP:
        //     return {
        //         ...state,
        //         step: action.payload,
        //     }

        // case RESET_STATE:
        //     return {
        //         ...state,
        //         step: 'auth',
        //         user: initState.user,
        //     }

        case SET_LOADER_AUTH:
            return {
                ...state,
                loader: action.payload,
            }

        case SET_FAILED_AUTH:
            return {
                ...state,
                failedAuth: action.payload,
            }
    }

    return state
}

export default AuthReducer
