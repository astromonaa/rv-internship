import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import { IWorkSpace } from "../types/types"
import { useAppSelector } from './hooks';
import { useActions } from './actions';
import { useCreateProjectMutation, useCreateToolMutation } from "../store/api/api";

export const useProjects = () => {
  const [createTool, {data: toolData}] = useCreateToolMutation()
  const [createAPiProject, {data: projectData}] = useCreateProjectMutation()

  const {workSpaces, candidateTool} = useAppSelector(state => state.area)
  const {changeWorkSpaceItem, addProject, toggleModal} = useActions()
  const {id} = useParams()
  
  const [current, setCurrent] = useState<IWorkSpace>()
  const [invalidDetect, setInvalidDetect] = useState(false)
  const [invalidName, setInvalidName] = useState(false)

  useEffect(() => {
    setCurrent(
      workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    )
  }, [])

  const onCreate = (detect:any, name:any, type:any) => {
    let valid = true
    if(!detect?.current?.value.trim().length) {
      setInvalidDetect(true)
      valid = false
    }
    if (!name?.current?.value.trim().length) {
      setInvalidName(true)
      valid = false
    }
    valid && createProject(detect, name, type)
  }
  const createProject = (detect:any, name:any, type:any) => {
    const spaceId = Number(id?.split('-')[1])
    const project = {
      detecting: detect?.current?.value,
      name: name?.current?.value,
      type: type?.current?.value
    }
    if (!current?.workspaceTool && candidateTool) {
      createTool({workspaceId: spaceId, tool: candidateTool})
      changeWorkSpaceItem({id: spaceId, value: candidateTool, fieldValue: 'workspaceTool'})
    }
    createAPiProject({workspaceId: spaceId, ...project})
    addProject({id: spaceId, project})
    toggleModal(false)
  }
  
  return {
    current,
    invalidDetect,
    invalidName,
    onCreate,
    setInvalidDetect,
    setInvalidName
  }
}