import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from './posts';

const reducer = combineReducers({
  posts: postsReducer,
});

export default reducer;
