import articleLoadReducer from "./articleLoadReducer"
import showMenuReducer from "./showMenuBurgerReducer"
import { combineReducers } from "redux"


const reducers = {
      article: articleLoadReducer,
      toggle:  showMenuReducer
}

export default combineReducers(reducers)
