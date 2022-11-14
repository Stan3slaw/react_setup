import type { AppState } from '..';
import { postsAdapter } from './posts.slice';

export const postsSelectors = postsAdapter.getSelectors((state: AppState) => state.posts);
