import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postReducer from './postsReducer';

const rootReducer = combineReducers({
  postsReducer: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;