import { combineReducers } from 'redux';
import listFilterReducer from './ListFilter/reducer';
import signUpReducer from './SignUp/reducer';
import authReducer from './Auth/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  listFilterReducer,
  signUpReducer,
  authReducer,
});

export default persistReducer(persisConfig, rootReducer);
