import { combineReducers } from 'redux';
import DuckReducer from './DuckReducer';
import AddToCartReducer from './AddToCartReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  duckData: DuckReducer,
  addToCart: AddToCartReducer,
  authData: AuthReducer
});
