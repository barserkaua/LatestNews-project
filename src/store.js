import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {latestNewsListReducer} from "./reducers/newsReducers";


const reducer = combineReducers({
    // here, we just register our reducers
    latestNewsList: latestNewsListReducer,
})


const initialState = {
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
