import { createSlice } from '@reduxjs/toolkit';
import { ModalSliceState } from '../types/types';

const initialState:ModalSliceState = {
  modalShow: false,
  toolsModal: false,
}

const ModalSlice = createSlice({
  name: 'ModalSlice',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modalShow = action.payload
    },
    toggleToolsModal: (state, action) => {
      state.toolsModal = action.payload
    }
  }
})

export const ModalReducer = ModalSlice.reducer
export const ModalActions = ModalSlice.actions