import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import type { GetPostResponseDto } from '../../core/types/api/posts-api.types';

export const postsAdapter = createEntityAdapter<GetPostResponseDto>();
const initialState = postsAdapter.getInitialState({
  loading: false,
  error: undefined,
});

export const postsSlice = createSlice({
  name: 'getPosts',
  initialState,
  reducers: {
    getPostsRequested(state) {
      state.loading = true;
    },
    getPostsSuccessful(state, action) {
      state.loading = false;
      postsAdapter.addMany(state, action.payload);
    },
    getPostsFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
