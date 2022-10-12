import type { AnyAction } from '@reduxjs/toolkit';

import type { ErrorResponse } from '../../core/types/api/api.types';
import type { GetPostResponseDto } from '../../core/types/api/posts-api.types';
import { postsActions } from './posts.actions';

export type PostsState = {
  posts: GetPostResponseDto[];
  loading: boolean;
  error?: ErrorResponse;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: undefined,
};

export const postsReducer = (state = initialState, action: AnyAction): PostsState => {
  switch (action.type) {
    case postsActions.getPostsRequested.type:
      return {
        ...state,
        loading: true,
      };
    case postsActions.getPostsSuccessful.type:
      return {
        ...initialState,
        posts: action.payload,
      };

    case postsActions.getPostsFailed.type:
      return {
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
