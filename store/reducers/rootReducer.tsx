import articleLoadReducer from "./articleLoadReducer";
import showMenuReducer from "./showMenuBurgerReducer";
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

const reducers = {
    article: articleLoadReducer,
    toggle: showMenuReducer,
    error: errorReducer,
};

export default combineReducers(reducers);
