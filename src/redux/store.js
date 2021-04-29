import { createStore, combineReducers } from 'redux'
import postReducers from './reducers/postReducers'
import postDetailsReducer from './reducers/postDetailsReducer';

const reducer = combineReducers({
  post: postReducers,
  postDetails: postDetailsReducer,
});

const store = createStore(reducer)

export default store;