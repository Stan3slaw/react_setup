import { createAction } from '@reduxjs/toolkit';

import { postsSlice } from './posts.slice';

const getPostsInitialized = createAction('getPosts/initialized');
const { getPostsRequested, getPostsSuccessful, getPostsFailed } = postsSlice.actions;

export const postsActions = {
  getPostsInitialized,
  getPostsRequested,
  getPostsSuccessful,
  getPostsFailed,
};
