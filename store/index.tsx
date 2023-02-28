import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/rootReducer";

export default configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
