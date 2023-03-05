import { useState, FC, useRef, useEffect, useCallback } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useActions } from '../../hooks/actions';
import { IWorkSpace } from '../../types/types';

import MoreUserInfo from './MoreUserInfo';
import Pagination from './Pagination';
import StartInfo from './StartInfo';
import WorkspaceNameInput from './WorkspaceNameInput';
import MemebersAddInput from './MemebersAddInput';
import WorkSpaceTypeChoose from './WorkSpaceTypeChoose';
import Modal from '../UI/Modal';
import CreateToolsModal from './CreateToolsModal';

import { useParams } from 'react-router-dom';
import { useWorkspaces } from '../../hooks/useWorkspaces';

const WorkSpaceCreate: FC = () => {
  const { pagination, paginationCurrent, workSpacePlans, workSpaces } = useAppSelector(state => state.area)
  const { modalShow } = useAppSelector(state => state.modal)
  const { setPage, toggleModal, toggleInput, toggleToolsModal } = useActions()
  const {createWorkspace, updateWorkspace, helpText} = useWorkspaces()
  const {id} = useParams()

  const [current, setCurrent] = useState<IWorkSpace>()

  const [choosenPlan, setChoosenPlan] = useState(workSpacePlans[0])
  const [choosenType, setChoosenType] = useState<any>(null)
  const [name, setName] = useState<string>('')
  const [emails, setEmails] = useState<string>('')
  const [role, setRole] = useState<string>('admin')

  const textInputRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)


  useEffect(() => {
    const currentWorkspace = workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    setCurrent(currentWorkspace)
  }, [id])

  const handleClick = () => {
    let valid
    if (paginationCurrent === 1) {
      if (textInputRef?.current?.value?.trim().length! > 0 && choosenType) valid = true
      setName(textInputRef?.current?.value?.trim()!)
    } else if (paginationCurrent === 2) {
      if (textAreaRef?.current?.value?.trim().length! > 0) valid = true
      setEmails(textAreaRef?.current?.value?.trim()!)
    } else if (paginationCurrent === 3) {
      valid = true
    }else {
      return workSpaceAdd()
    }
    valid && setPage(paginationCurrent + 1)
  }

  const workSpaceAdd = () => {
    const workSpace = {
      id: current?.id!,
      name,
      emails,
      workspacePlan: {...choosenPlan, id: current?.workspacePlan.id},
      workspaceType: {...choosenType, id: current?.workspaceType.id},
      role,
      Projects: []
    }
    if (current) {
      updateWorkspace(workSpace)
    }else {
      createWorkspace(workSpace)
    }
    toggleModal(true)
    toggleToolsModal(true)
    toggleInput(false)
    setPage(1)
  }

  return (
    <>
      <Modal title='Get Started On Your First Project'>
        <CreateToolsModal/>
      </Modal>
      {!modalShow && <div className='work-space flex items-center justify-center h-[100%]'>
        <div className='work-space-create rounded-[0.75rem]'>
          <h2 className='text-center font-bold text-[1.375rem] mt-[2rem]'>Let's set up your new workspace!</h2>
          <div className='text-[0.75rem] line-[1rem] px-[4.5rem] text-center'>
            A workspace is where a team can collaborate to create, manage, and label datasets, and train and deploy models.
          </div>
          {paginationCurrent < 4 && <Pagination count={pagination} current={paginationCurrent} />}
          <div className='text-center text-[0.875rem] font-medium' dangerouslySetInnerHTML={{__html: helpText}}></div>
          <StartInfo handleClick={handleClick} workSpaceAdd={workSpaceAdd}>
            {paginationCurrent === 1 && <WorkspaceNameInput inputRef={textInputRef} choosen={choosenType} setChoosenType={setChoosenType} />}
            {paginationCurrent === 2 && <MemebersAddInput inputRef={textAreaRef} setRole={setRole} />}
            {paginationCurrent === 3 && <WorkSpaceTypeChoose choosenPlan={choosenPlan} setChoosenPlan={setChoosenPlan} />}
            {paginationCurrent === 4 && <MoreUserInfo/>}
          </StartInfo>
        </div>
      </div>}
    </>
  );
};

export default WorkSpaceCreate;