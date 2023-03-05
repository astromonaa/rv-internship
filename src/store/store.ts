import { configureStore } from "@reduxjs/toolkit";
import { areaReducer } from './PerArea.slice';
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { ModalReducer } from './Modal.slice';
import { AuthReducer } from './auth.slice';
import { api } from './api/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    area: areaReducer,
    modal: ModalReducer,
    auth: AuthReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(api.middleware)
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
