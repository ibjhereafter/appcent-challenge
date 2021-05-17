import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import userReducer from "./userReducer";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
    registration: userReducer,
    authentication: authenticationReducer
});

export default rootReducer;