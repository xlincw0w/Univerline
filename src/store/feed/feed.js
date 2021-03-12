const initState = {
    feed_friends: [],
}

const SET_FEED = 'SET_FEED'
const RESET_STATE = 'RESET_STATE'

export const SetFeed = (payload) => ({
    type: SET_FEED,
    payload,
})

export const ResetFeed = () => ({
    type: RESET_STATE,
})

const FeedReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FEED:
            return {
                ...state,
                feed_friends: action.payload,
            }

        case RESET_STATE:
            return initState
    }

    return state
}

export default FeedReducer
