import {Briefcase, Mortarboard, Pencil, Map, UniversalAccess} from 'react-bootstrap-icons'
import {createSlice} from '@reduxjs/toolkit'
import { IPerAreaState, IWorkSpace } from '../types/types';

const initialState: IPerAreaState = {
  pagination: [1, 2, 3],
  paginationCurrent: 1,
  helpText: ``,
  inputDescText: ``,
  inputShow: false,
  buttonActive: false,
  buttonText: 'Continue',
  buttons: [
    { id: 1, text: 'Work', icon: Briefcase, type: 'work' },
    { id: 2, text: 'Academia', icon: Mortarboard, type: 'academia' },
    { id: 3, text: 'Hobbies', icon: Pencil, type: 'hobbies' }
  ],
  workSpacePlans: [
    {
      id: 1,
      name: 'Business',
      goal: 'For businesses looking to productionize.',
      type: 'Private. Experiment for free.',
      desc: 'Plans start at $1,250/mo, with options to customize.'
    },
    {
      id: 2,
      name: 'Community',
      goal: 'For hobbyists, students, and personal use.',
      type: 'Public. Free forever.',
      desc: 'Pay as you go for training and inferences.'
    }
  ],
  toolsCards: [
    {id: 1, name: 'Guided Tour', desc: `I'd love a guided tutorial project.`, icon: Map},
    {id: 2, name: 'Explore Solo', desc: `I don't need any hints to get going.`, icon: UniversalAccess}
  ],
  candidateTool: null,
  workSpaces: []
}

const PerAreaSlice = createSlice({
  name: 'PerArea',
  initialState,
  reducers: {
    setWorkSpaces: (state, action) => {
      state.workSpaces = action.payload
    },
    addWorkSpace: (state, action) => {
      state.workSpaces.push(action.payload)
    },
    deleteWorkspace: (state, action) => {
      state.workSpaces = state.workSpaces.filter(el => el.id !== action.payload)
    },
    changeWorkSpace: (state, action) => {
      let idx = state.workSpaces.findIndex(el => el.id === action.payload.id)
      state.workSpaces[idx] = action.payload
    },
    changeWorkSpaceItem: (state, action) => {
      let idx = state.workSpaces.findIndex(el => el.id === action.payload.id)
      let field:string = action.payload.fieldValue
      state.workSpaces[idx][field as keyof IWorkSpace] = action.payload.value
    },
    addProject: (state, action) => {
      const {id, project} = action.payload
      const idx = state.workSpaces.findIndex(el => el.id === id)
      state.workSpaces[idx].Projects.push(project)
    },
    toggleInput: (state, action) => {
      state.inputShow = action.payload
    },
    setPage: (state, action) => {
      state.paginationCurrent = action.payload
    },
    setButtonActive: (state, action) => {
      state.buttonActive = action.payload
    },
    setHelpText: (state, action) => {
      state.helpText = action.payload
    },
    setInputDescText(state, action) {
      state.inputDescText = action.payload
    },
    setButtonText: (state, action) => {
      state.buttonText = action.payload
    },
    setCandidateTool: (state, action) => {
      state.candidateTool = action.payload
    }
  }
})

export const areaReducer = PerAreaSlice.reducer
export const areaActions = PerAreaSlice.actions