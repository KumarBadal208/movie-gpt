import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import movieGptSliceReducer from "./movieGptSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movie: movieSliceReducer,
        movieGpt: movieGptSliceReducer
    },
});

export default appStore;