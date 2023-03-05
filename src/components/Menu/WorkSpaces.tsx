import {Pencil} from 'react-bootstrap-icons'
import WorkSpaceList from './WorkSpaceList';
import { useAppSelector } from '../../hooks/hooks';
import { useActions } from '../../hooks/actions';
import { useWorkspaces } from '../../hooks/useWorkspaces';

const WorkSpaces = () => {
  const {workSpaces} = useAppSelector(state => state.area)
  const {createWorkspace} = useWorkspaces()

  const addNewWorkSpace = () => {
    const workSpace = {
      name: 'New WorkSpace',
      emails: '',
      workspacePlan: {name: null, goal: null, type: null, desc: null},
      workspaceType: {text: null, type: null},
    }
    createWorkspace(workSpace)
  }
  return (
    <>
      <div className='flex text-[0.875rem] items-center pl-[12px] font-medium'>
        <Pencil className='mr-[5px]'/>
        <span>Workspaces</span>
        {workSpaces.length ?
          <div
            className='add-workspace text-[11px] ml-auto py-[0.25rem] px-[0.47rem]'
            onClick={addNewWorkSpace}
          >
              + <span>add workspace</span>
          </div> : ''
        }
      </div>
      <WorkSpaceList/>
    </>
  );
};

export default WorkSpaces;