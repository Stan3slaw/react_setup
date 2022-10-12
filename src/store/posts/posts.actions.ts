import { createAction } from '@reduxjs/toolkit';

const getPostsInitialized = createAction('getPosts/initialized');
const getPostsRequested = createAction('getPosts/requested');
const getPostsSuccessful = createAction('getPosts/successful');
const getPostsFailed = createAction('getPosts/failed');

export const postsActions = {
  getPostsInitialized,
  getPostsRequested,
  getPostsSuccessful,
  getPostsFailed,
};
