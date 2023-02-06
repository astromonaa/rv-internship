import { configureStore } from "@reduxjs/toolkit";
import { areaReducer } from './PerArea.slice';
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { ModalReducer } from './Modal.slice';

export const store = configureStore({
  reducer: {
    area: areaReducer,
    modal: ModalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
