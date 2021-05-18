import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import userReducer from "./userReducer";
import authenticationReducer from "./authenticationReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
    registration: userReducer,
    authentication: authenticationReducer,
    comments: commentReducer
});

export default rootReducer;