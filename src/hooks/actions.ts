import { areaActions } from '../store/PerArea.slice';
import { ModalActions } from '../store/Modal.slice';
import { useDispatch } from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit'

const actions = {
  ...areaActions,
  ...ModalActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}