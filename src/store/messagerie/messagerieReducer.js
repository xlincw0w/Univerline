import { combineReducers } from "redux";
import authReducer from './authReducer';
import userReducer from './userReducer';

const messagerieReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

export default messagerieReducer;