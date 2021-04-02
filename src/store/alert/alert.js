const initState = {
    alert: {
        pop: false,
        severity: 'info',
        type: '',
        message: '',
    },
}

const SET_ALERT = 'SET_ALERT'
const RESET_ALERT = 'RESET_ALERT'

export const SetAlert = (severity, type, message, dispatch) => {
    console.log(dispatch)
    setTimeout(() => {
        dispatch(ResetAlert())
    }, 4000)

    return dispatch({
        type: SET_ALERT,
        payload: {
            pop: true,
            severity,
            type,
            message,
        },
    })
}

export const ResetAlert = () => ({
    type: RESET_ALERT,
})

const AlertReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload,
            }

        case RESET_ALERT:
            return initState
    }

    return state
}

export default AlertReducer
