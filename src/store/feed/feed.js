const initState = {
    feed_friends: [],
    feed_prof: [],
    refresh: 0,
}

const SET_FEED = 'SET_FEED'
const SET_FEED_PROF = 'SET_FEED_PROF'
const SET_REFRESH = 'SET_REFRESH'
const RESET_STATE = 'RESET_STATE'

export const SetFeed = (payload) => ({
    type: SET_FEED,
    payload,
})

export const RefreshFeed = () => ({
    type: SET_REFRESH,
})

export const SetFeedProf = (payload) => ({
    type: SET_FEED_PROF,
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

        case SET_FEED_PROF:
            return {
                ...state,
                feed_prof: action.payload,
            }

        case SET_REFRESH:
            return {
                ...state,
                refresh: state.refresh + 1,
            }

        case RESET_STATE:
            return initState
    }

    return state
}

export default FeedReducer
