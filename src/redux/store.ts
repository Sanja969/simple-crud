import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  postReducer: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;