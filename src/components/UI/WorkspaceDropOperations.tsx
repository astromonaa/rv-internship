import { worspaceOperations } from '../../utils/consts'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Trash, Sliders2, Pencil } from 'react-bootstrap-icons'
import { useMemo } from 'react';
import { useWorkspaces } from '../../hooks/useWorkspaces';
import { IWorkSpace } from '../../types/types';

const WorkspaceDropOperations = ({setDropdown, workspace}:{setDropdown?: (bool: boolean) => void, workspace: IWorkSpace}) => {
  const {name, id} = workspace
  const location = useLocation()
  const navigate = useNavigate()
  const {removeWorkspace} = useWorkspaces()

  const onDropdownClick = (event: React.MouseEvent<HTMLLIElement>, operation: string) => {
    event.stopPropagation()
    switch (operation) {
      case 'delete':
        removeWorkspace()
        return setDropdown!(false)
      case 'plan&billing':
        return navigate(`/${name}-${id}/settings/plan`)
      case 'usage':
        return navigate(`/${name}-${id}/settings/usage`)
      case 'members':
        return navigate(`/${name}-${id}/settings/members`)
      case 'roboflow-api': 
        return navigate(`/${name}-${id}/settings/api`)
      case 'third-party-key':
        return navigate(`/${name}-${id}/settings/thirdpartykey`)
      default:
        return
    }
  }

  const operations = useMemo(() => {
    if (location.pathname.includes('settings')) {
      return worspaceOperations.filter(el =>
        el.operation !== 'workspace-settings' &&
        el.operation !== 'rename' &&
        el.operation !== 'delete'
      )
    } else {
      return worspaceOperations
    }
  }, [location])

  return (
    <div className={`${location.pathname.includes('settings') ? 'account-settings' : ''}`}>
      {
        operations.map(operation =>
          <li
            className='workspace-settings-item'
            onClick={e => onDropdownClick(e, operation.operation)}
            key={operation.operation}
          >
            {operation.operation === 'workspace-settings' && <Sliders2 />}
            {operation.operation === 'rename' && <Pencil />}
            {operation.operation === 'delete' && <Trash />}
            {operation.value}
          </li>
        )
      }
    </div>
  );
};

export default WorkspaceDropOperations;