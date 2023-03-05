import { useCreateWorkspaceMutation, useLazyFetchWorkSpacesQuery, useRemoveWorkspaceMutation, useUpdateNameMutation, useUpdateWorkspaceMutation } from "../store/api/api";
import { useActions } from './actions';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from './hooks';


export function useWorkspaces() {
  const { setWorkSpaces, addWorkSpace, changeWorkSpace, setButtonActive, deleteWorkspace, changeWorkSpaceItem } = useActions()
  const [fetchWorkspaces, { data }] = useLazyFetchWorkSpacesQuery()
  const [create, { data: created }] = useCreateWorkspaceMutation()
  const [update, { data: updated }] = useUpdateWorkspaceMutation()
  const [remove, { data: removed }] = useRemoveWorkspaceMutation()
  const [updateName, { data: updatedName }] = useUpdateNameMutation()

  const { paginationCurrent } = useAppSelector(state => state.area)
  const { id } = useParams()
  const navigate = useNavigate()

  const [helpText, setHelpText] = useState<string>('')
  const [inputDescText, setInputDescText] = useState<string>('')
  const [buttonText, setButtonText] = useState<string>('')
  const [nameInputVisible, setNameInputVisible] = useState(false)
  const [nameValue, setNameValue] = useState<string>('')


  useEffect(() => {
    if (paginationCurrent === 1) {
      setHelpText(`To start, let's customize it.`)
      setInputDescText('What will you be using this workspace for?')
      setButtonText('Continue')
      setButtonActive(false)
    } else if (paginationCurrent === 2) {
      setHelpText(`Invite others to collaborate on projects.`)
      setInputDescText('Invite via Email:')
      setButtonText('Continue')
      setButtonActive(false)
    } else if (paginationCurrent === 3) {
      setHelpText(`Choose your workspace type.`)
      setInputDescText('')
      setButtonText('Create and Public Workspace')
    } else {
      setHelpText('To receive more specialized support, let us know a few more things. <br> <small>(Optional)</small>')
      setButtonText('Finish')
    }
  }, [paginationCurrent])

  useEffect(() => {
    if (data) {
      setWorkSpaces(data)
    }
  }, [data])

  useEffect(() => {
    if (created) {
      addWorkSpace(created)
      navigate(`/workspaces/${created.name}-${created.id}`)
    } else if (updated) {
      changeWorkSpace(updated)
      navigate(`/workspaces/${updated.name}-${updated.id}`)
    } else if (removed) {
      deleteWorkspace(Number(id?.split('-')[1]))
      navigate('/')
    } else if (updatedName) {
      const data = { id: updatedName.id, value: updatedName.name, fieldValue: 'name' }
      changeWorkSpaceItem(data)
      setNameInputVisible(false)
    }
  }, [created, updated, removed, updatedName])

  const createWorkspace = (data: any) => {
    create(data)
  }

  const updateWorkspace = (data: any) => {
    update(data)
  }
  const removeWorkspace = () => {
    remove(Number(id?.split('-')[1]))
  }

  const updateWorkspaceName = () => {
    const spaceId = Number(id?.split('-')[1])
    updateName({ id: spaceId, name: nameValue })
  }
  return {
    data,
    fetchWorkspaces,
    createWorkspace,
    updateWorkspace,
    helpText,
    inputDescText,
    buttonText,
    removeWorkspace,
    updateWorkspaceName,
    nameInputVisible,
    setNameInputVisible,
    nameValue,
    setNameValue
  }
} 