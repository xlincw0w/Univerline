import { userConstants } from '../../Layout/Messagerie/actions/constants'

const intiState = {
    users: [],
    conversations: [],
    user_contact: null,
}

export const SetUserContact = (payload) => ({
    type: 'SET_USER_CONTACT',
    payload,
})

const userReducer = (state = intiState, action) => {
    switch (action.type) {
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            break
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users,
            }
            break
        case userConstants.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations,
            }
            break
        case `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`:
            state = {
                ...state,
                conversations: [],
            }
            break

        case 'SET_USER_CONTACT':
            return {
                ...state,
                user_contact: action.payload,
            }
    }

    return state
}
export default userReducer
