import type { AppState } from '..';
import type { GetPostResponseDto } from '../../core/types/api/posts-api.types';

const getPosts = (state: AppState): GetPostResponseDto[] => state.posts.posts;

export const postsSelectors = {
  getPosts,
};
