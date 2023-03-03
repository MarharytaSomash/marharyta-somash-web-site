import articleLoadReducer from "./articleLoadReducer";
import showMenuReducer from "./showMenuBurgerReducer";
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
    article: articleLoadReducer,
    toggle: showMenuReducer,
    error: errorReducer,
});
export type RootState = ReturnType<typeof reducers>;
export default reducers;
