import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { configureStore, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalReducer from '../features/modal/modal.slice';
import themeReducer from '../features/theme/theme.slice';


export const rootReducer = combineReducers({
  modal: modalReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
