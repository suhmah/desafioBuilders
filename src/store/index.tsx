import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

const storeTwoVersion = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export default storeTwoVersion;
