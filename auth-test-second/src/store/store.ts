import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducers/UserSlice";
import { postUserAPI } from "../services/PostService";

const rootReducer = combineReducers({
    userReducer,
    [postUserAPI.reducerPath] : postUserAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postUserAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']