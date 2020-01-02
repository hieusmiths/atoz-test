import { combineReducers } from "redux";
import authReducers from "../service/auth/store/reducers";
import productReducers from "../service/product/store/reducer";
export default combineReducers({
  productReducers,
  authReducers
});
