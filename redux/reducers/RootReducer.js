import { combineReducers } from "redux";
import TabReducer from "./TabReducer";



const RootReducer = combineReducers({
    tabs: TabReducer
});

export default RootReducer;