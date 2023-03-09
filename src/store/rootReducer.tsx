import { combineReducers } from "redux";
import { authReducer } from "../redux/auth/reducer";
import { otherReducer } from "../redux/other/reducer";

const rootReducer = combineReducers({
    authReducer,
    otherReducer
});

export default rootReducer;
