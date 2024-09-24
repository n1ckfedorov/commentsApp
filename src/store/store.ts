import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

// Export RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
