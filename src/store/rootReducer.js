import { combineReducers } from 'redux';
import listFilterReducer from './ListFilter/reducer';
import searchFilterReducer from './SearchFilter/reducer';
import signUpReducer from './SignUp/reducer';
import authReducer from './Auth/reducer';
import postReducer from './Post/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  searchFilterReducer,
  listFilterReducer,
  signUpReducer,
  authReducer,
  postReducer,
});

export default persistReducer(persisConfig, rootReducer);
