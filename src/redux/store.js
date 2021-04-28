import { createStore, combineReducers } from 'redux'
import postReducers from './reducers/postReducers'


const reducer = combineReducers({
  post: postReducers,
});

const store = createStore(reducer)

export default store;