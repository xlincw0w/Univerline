import { combineReducers } from 'redux'

import SignUpReducer from './signup/signupReducer'
import AuthReducer from './auth/auth'
import FeedReducer from './feed/feed'
import ProfileReducer from './profile/profile'
import authReducer from './messagerie/authReducer'
import userReducer from './messagerie/userReducer'

const rootReducer = combineReducers({
    SignUpReducer,
    AuthReducer,
    FeedReducer,
    ProfileReducer,
    authReducer,
    userReducer
})

export default rootReducer
