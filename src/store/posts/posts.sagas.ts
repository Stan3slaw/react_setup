import type { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import postsApiService from '../../core/services/api/posts/posts-api.service';
import { postsActions } from './posts.actions';

function* getPostsWorker() {
  yield put({ type: postsActions.getPostsRequested.type });
  try {
    const { data } = yield call(postsApiService.getPosts);
    yield put({ type: postsActions.getPostsSuccessful.type, payload: data });
  } catch (error: unknown) {
    yield put({ type: postsActions.getPostsFailed.type, payload: (error as AxiosError)?.response?.data });
  }
}

function* getPostsWatcher() {
  yield takeEvery([postsActions.getPostsInitialized.type], getPostsWorker);
}

export const postsSagas = {
  getPostsWorker,
  getPostsWatcher,
};
