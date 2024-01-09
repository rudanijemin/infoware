import todoReducers from "./reducers/todo-reducers";
import {createStore,combineReducers} from "redux" 

const rootReducer = combineReducers({todos:todoReducers,})
const store = createStore(rootReducer);

export default store