import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
