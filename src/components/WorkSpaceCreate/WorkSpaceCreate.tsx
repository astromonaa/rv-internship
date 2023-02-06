import Pagination from './Pagination';
import { useState, FC, useRef, useEffect, useCallback } from 'react';
import StartInfo from './StartInfo';
import { useAppSelector } from '../../hooks/hooks';
import CompanyNameInput from './CompanyNameInput';
import MemebersAddInput from './MemebersAddInput';
import { useActions } from '../../hooks/actions';
import WorkSpaceTypeChoose from './WorkSpaceTypeChoose';
import { IChoosen, IWorkSpace } from '../../types/types';
import Modal from '../UI/Modal';
import CreateToolsModal from './CreateToolsModal';
import MoreUserInfo from './MoreUserInfo';

import { useParams, useNavigate } from 'react-router-dom';

function getInputRef(paginationCurrent: number, textInputRef: any, textAreatRef: any): any {
  switch (paginationCurrent) {
    case 1:
      return textInputRef
    case 2:
      return textAreatRef
    default:
      return
  }
}

const WorkSpaceCreate: FC = () => {
  const { pagination, paginationCurrent, helpText, workSpacePlans, workSpaces } = useAppSelector(state => state.area)
  const { modalShow } = useAppSelector(state => state.modal)
  const { setHelpText, setInputDescText, setButtonText, setButtonActive, setPage, toggleModal, addWorkSpace, changeWorkSpace, toggleInput, toggleToolsModal } = useActions()
  const {id} = useParams()
  const navigate = useNavigate()

  const [modalTitle, setModalTitle] = useState('Get Started On Your First Project')
  const [current, setCurrent] = useState<IWorkSpace>()

  const [choosenPlan, setChoosenPlan] = useState(workSpacePlans[0])
  const [choosenType, setChoosenType] = useState<IChoosen | null>(null)
  const [name, setName] = useState<string>('')
  const [emails, setEmails] = useState<string>('')
  const [role, setRole] = useState<string>('admin')

  const [workSpace, setWorkSpace] = useState<any>()

  const textInputRef = useRef<HTMLInputElement>(null)
  const textAreatRef = useRef<HTMLTextAreaElement>(null)

  const inputRef = useCallback(getInputRef(paginationCurrent, textInputRef, textAreatRef), [paginationCurrent])

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
    }else {
      setHelpText('To receive more specialized support, let us know a few more things. <br> <small>(Optional)</small>')
      setButtonText('Finish')
    }
  }, [paginationCurrent])

  useEffect(() => {
    setCurrent(
      workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    )
  }, [])

  const handleClick = () => {
    let valid
    if (paginationCurrent === 1) {
      if (textInputRef?.current?.value?.trim().length! > 0 && choosenType) valid = true
      setName(textInputRef?.current?.value?.trim()!)
    } else if (paginationCurrent === 2) {
      if (textAreatRef?.current?.value?.trim().length! > 0) valid = true
      setEmails(textAreatRef?.current?.value?.trim()!)
    } else if (paginationCurrent === 3) {
      valid = true
    }else {
      return workSpaceAdd()
    }
    valid && setPage(paginationCurrent + 1)
  }

  const workSpaceAdd = () => {
    const workSpace = {
      id: Date.now(),
      name,
      emails,
      plan: choosenPlan,
      type: choosenType,
      role,
      projects: []
    }
    if (current) {
      changeWorkSpace({...workSpace, id: Number(id?.split('-')[1])})
      navigate( `/${workSpace?.name}-${Number(id?.split('-')[1])}`)
    }else {
      addWorkSpace({...workSpace})
      navigate( `/${workSpace?.name}-${workSpace?.id}`)
    }
    toggleModal(true)
    toggleToolsModal(true)
    toggleInput(false)
    setPage(1)
  }

  return (
    <>
      <Modal title={modalTitle}>
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
            {paginationCurrent === 1 && <CompanyNameInput inputRef={inputRef} choosen={choosenType} setChoosenType={setChoosenType} />}
            {paginationCurrent === 2 && <MemebersAddInput inputRef={inputRef} setRole={setRole} />}
            {paginationCurrent === 3 && <WorkSpaceTypeChoose choosenPlan={choosenPlan} setChoosenPlan={setChoosenPlan} />}
            {paginationCurrent === 4 && <MoreUserInfo/>}
          </StartInfo>
        </div>
      </div>}
    </>
  );
};

export default WorkSpaceCreate;