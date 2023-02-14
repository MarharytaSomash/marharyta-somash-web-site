import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/articleLoadReducer"

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() 
})

