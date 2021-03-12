import { combineReducers } from 'redux'

import SignUpReducer from './signup/signupReducer'
import AuthReducer from './auth/auth'

const rootReducer = combineReducers({
    SignUpReducer,
    AuthReducer,
})

export default rootReducer
