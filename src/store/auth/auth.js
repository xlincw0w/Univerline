const initState = {
    user: {
        id: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmed_password: '',
        user_type: '',
        niveau_ens: '',
        domaine_ens: '',
        niveau_edu: '',
        domaine_edu: '',
        etablissement: '',
        avatar: '',
        isNewUser: false,
    },

    failedAuth: false,
    loader: false,
}

const SET_USER = 'SET_USER'
const RESET_STATE = 'RESET_STATE'
const SET_LOADER_AUTH = 'SET_LOADER_AUTH'
const SET_FAILED_AUTH = 'SET_FAILED_AUTH'

export const SetUser = (payload) => ({
    type: SET_USER,
    payload,
})

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
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

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
