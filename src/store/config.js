import { combineReducers,createStore } from "redux";
import { datGheReducer } from "./reducers/datGheReducer";


const rootReducer = combineReducers({
    datGheReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())