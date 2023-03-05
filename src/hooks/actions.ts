import { areaActions } from '../store/PerArea.slice';
import { ModalActions } from '../store/Modal.slice';
import { useDispatch } from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit'
import { AuthActions } from '../store/auth.slice';

const actions = {
  ...areaActions,
  ...ModalActions,
  ...AuthActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}