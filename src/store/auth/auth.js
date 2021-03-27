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

    classes: [],
    friends: [],
    contact: [],

    failedAuth: false,
    loader: false,
}

const SET_USER = 'SET_USER'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CLASSES = 'SET_CLASSES'
const RESET_AUTH = 'RESET_STATE'
const SET_LOADER_AUTH = 'SET_LOADER_AUTH'
const SET_FAILED_AUTH = 'SET_FAILED_AUTH'
const SET_CONTACT = 'SET_CONTACT'

export const SetContact= (payload) =>({
    type: SET_CONTACT,
    payload,
})
export const SetUser = (payload) => ({
    type: SET_USER,
    payload,
})

export const SetFriends = (payload) => ({
    type: SET_FRIENDS,
    payload,
})

export const SetClasses = (payload) => ({
    type: SET_CLASSES,
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

export const ResetAuthState = () => ({
    type: RESET_AUTH,
})

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CONTACT:
            return {
                ...state,
                contact:action.payload,
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case SET_FRIENDS:
            return {
                ...state,
                friends: action.payload,
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

        case SET_CLASSES:
            return {
                ...state,
                classes: action.payload,
            }

        case RESET_AUTH:
            return initState
    }

    return state
}

export default AuthReducer
