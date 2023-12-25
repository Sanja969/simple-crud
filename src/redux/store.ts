import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  postsReducer: postReducer,
  formReducer: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;