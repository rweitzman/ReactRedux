import { combineReducers } from "redux";
import { productReducer, selecterProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selecterProductReducer,
});

export default reducers;
