import { combineReducers } from "redux";
import channelReducer from "./channelReducer";
import errorReducer from "./errorReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
  channelData: channelReducer,
  error: errorReducer,
  menu: menuReducer
});