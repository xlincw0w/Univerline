const initState = {
    user: {
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
    },
    step: 'auth',
}

const UPDATE_SIGNUP_USER = 'UPDATE_SIGNUP_USER'
const UPDATE_SIGNUP_STEP = 'UPDATE_SIGNUP_STEP'

export const UpdateSignupUser = (payload) => ({
    type: UPDATE_SIGNUP_USER,
    payload,
})

export const UpdateSignupStep = (payload) => ({
    type: UPDATE_SIGNUP_STEP,
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
    }

    return state
}

export default SignUpReducer
