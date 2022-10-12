import { all } from 'redux-saga/effects';

import { postsSagas } from './posts';

export default function* saga() {
  yield all([postsSagas.getPostsWatcher()]);
}
