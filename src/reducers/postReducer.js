import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};


/// Rules for defining reducers (https://redux.js.org/api/combinereducers)
/// Any reducer passed to combineReducers must satisfy these rules:
/// --------------------------------------------------------------------------------------------------------------------
/// 1. For any action that is not recognized, it must return the state given to it as the first argument.
/// --------------------------------------------------------------------------------------------------------------------
/// 2. It must never return undefined. It is too easy to do this by mistake via an early return statement, 
///    so combineReducers throws if you do that instead of letting the error manifest itself somewhere else.
/// --------------------------------------------------------------------------------------------------------------------
/// 3. If the state given to it is undefined, it must return the initial state for this specific reducer.
///    According to the previous rule, the initial state must not be undefined either.It is handy to specify
///    it with ES6 optional arguments syntax, but you can also explicitly check the first argument for being undefined.
/// --------------------------------------------------------------------------------------------------------------------

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
