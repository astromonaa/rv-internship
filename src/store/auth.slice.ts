import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../types/types';
const initialState:IAuthState = {
  isAuth: false,
  user: null
}

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  }
})

export const AuthReducer = AuthSlice.reducer
export const AuthActions = AuthSlice.actions