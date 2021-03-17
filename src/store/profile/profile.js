const initState = {
    modify: false,
    loader: false,
    friend: false,
    pending: false,
    reset: 0,

    publications: [],

    user_info: {
        id: '',
        nom: '',
        prenom: '',
        etablissement: '',
        niveau_edu: '',
        domaine_edu: '',
        niveau_ens: '',
        domaine_ens: '',
        email: '',
        date_inscription: '',
        avatar: '',
    },
}

const SET_LOADER_PROFILE = 'SET_LOADER_PROFILE'
const SET_MODIFY_INFO = 'SET_MODIFY_INFO'
const SET_USER_INFO = 'SET_USER_INFO'
const RESET_PROFILE_STATE = 'RESET_PROFILE_STATE'
const SET_FRIEND = 'SET_FRIEND'
const SET_PENDING = 'SET_PENDING'

const SET_PUBLICATIONS = 'SET_PUBLICATIONS'

const REFRESH_PROFILE = 'REFRESH_PROFILE'

export const RefreshProfile = () => ({
    type: REFRESH_PROFILE,
})

export const SetLoader = (payload) => ({
    type: SET_LOADER_PROFILE,
    payload,
})

export const SetFriend = (payload) => ({
    type: SET_FRIEND,
    payload,
})

export const SetPending = (payload) => ({
    type: SET_PENDING,
    payload,
})

export const SetModify = (payload) => ({
    type: SET_MODIFY_INFO,
    payload,
})

export const SetUserInfo = (payload) => ({
    type: SET_USER_INFO,
    payload,
})

export const ResetProfileState = () => ({
    type: RESET_PROFILE_STATE,
})

export const SetPublications = (payload) => ({
    type: SET_PUBLICATIONS,
    payload,
})

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADER_PROFILE:
            return {
                ...state,
                loader: action.payload,
            }

        case SET_MODIFY_INFO:
            return {
                ...state,
                modify: action.payload,
            }

        case SET_USER_INFO:
            return {
                ...state,
                user_info: action.payload,
            }

        case SET_FRIEND:
            return {
                ...state,
                friend: action.payload,
            }

        case SET_PENDING:
            return {
                ...state,
                pending: action.payload,
            }

        case SET_PUBLICATIONS:
            return {
                ...state,
                publications: action.payload,
            }

        case REFRESH_PROFILE:
            return {
                ...state,
                reset: state.reset + 1,
            }

        case RESET_PROFILE_STATE:
            return initState
    }

    return state
}

export default ProfileReducer
