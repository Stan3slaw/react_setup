import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export default store;
