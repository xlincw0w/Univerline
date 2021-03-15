import { combineReducers } from 'redux'

import SignUpReducer from './signup/signupReducer'
import AuthReducer from './auth/auth'
import FeedReducer from './feed/feed'
import ProfileReducer from './profile/profile'

const rootReducer = combineReducers({
    SignUpReducer,
    AuthReducer,
    FeedReducer,
    ProfileReducer,
})

export default rootReducer
