import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
// import testReducer from './test.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  // test: testReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export default persistReducer(persistConfig, rootReducer);
