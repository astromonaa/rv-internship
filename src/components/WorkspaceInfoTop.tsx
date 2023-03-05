import { Umbrella, Pencil, PersonAdd, Gear, Sliders2, Trash } from 'react-bootstrap-icons'
import { FC, useState, useEffect } from 'react';
import { IWorkSpace } from '../types/types';
import { useWorkspaces } from '../hooks/useWorkspaces';

import Dropdown from './UI/Dropdown';

import '../styles/PerArea.scss'
import WorkspaceDropOperations from './UI/WorkspaceDropOperations';

const WorkspaceInfoTop: FC<IWorkSpace|any> = (workspace) => {
  const { updateWorkspaceName, nameInputVisible, setNameInputVisible, nameValue, setNameValue } = useWorkspaces()
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    setNameValue(workspace.name)
  }, [workspace.name])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateWorkspaceName()
    }
  }

  return (
    <div className='px-[38px]'>
      <section className='mt-[40px] grid grid-cols-[min-content_min-content_1fr] items-center border-b-[1px] pb-[15px]'>
        <div className='rounded-[50%] border-[1px] hover:border-[blue] hover:bg-[rgba(242,230,254,1)] transition-all w-[32px] h-[32px] flex items-center justify-center'>
          <Umbrella />
        </div>
        <div className='ml-[15px] flex rounded-lg hover:bg-[rgba(242,230,254,1)] py-[7px] px-[5px] items-center relative'>
          <span className='mr-[10px] text-[1.125rem] lh-[1.75rem] text-[rgba(103,6,206,1)] whitespace-nowrap'>{workspace.name}</span>
          <Pencil onClick={() => setNameInputVisible(true)} />
          <input
            type="text"
            className={`user-info-name-input ${nameInputVisible ? 'visible' : ''} min-w-[100px]`}
            value={nameValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className='flex items-center ml-auto gap-2'>
          <div className="user-ava">{workspace.name?.slice(0, 1)}</div>
          <div className="space-info-top-btn flex items-center">
            <PersonAdd />
            <span className='ml-[7px]'>Invite</span>
          </div>
          <div
            className="space-info-top-btn flex items-center relative cursor-context-menu"
            onClick={() => setDropdown(!dropdown)}
          >
            <Gear />
            <span className='ml-[7px]'>Settings</span>
            <Dropdown dropdown={dropdown} >
              <WorkspaceDropOperations setDropdown={setDropdown} workspace={workspace} />
            </Dropdown>
        </div>
    </div>
      </section >
    </div >
  );
};

export default WorkspaceInfoTop;