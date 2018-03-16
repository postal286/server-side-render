import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import adminLogin from './admin';
import adminPanel from './adminPanel';
import indexReducer from './admin';
import postsReducer from './posts';

export default combineReducers({
  adminLogin,
  adminPanel,
  indexReducer,
  postsReducer,
  formReducer,
})

