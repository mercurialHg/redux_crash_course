import { combineReducers } from 'redux';
import postReducer from './postReducer';

/// https://redux.js.org/api/combinereducers
/// You can control state key names by using different keys for the reducers in the passed object.
/// For example, you may call combineReducers({ todos: myTodosReducer, counter: myCounterReducer }) 
/// so that state shape to be { todos, counter }
/// up until now, seems that reducers define state shape

export default combineReducers({
  posts: postReducer
});
