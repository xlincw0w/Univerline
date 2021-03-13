import { combineReducers } from 'redux'

import SignUpReducer from './signup/signupReducer'
import AuthReducer from './auth/auth'
import FeedReducer from './feed/feed'

const rootReducer = combineReducers({
    SignUpReducer,
    AuthReducer,
    FeedReducer,
})

export default rootReducer
