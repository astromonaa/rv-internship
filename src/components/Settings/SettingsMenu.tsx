import { useAppSelector } from '../../hooks/hooks';
import { Link, useParams, useNavigate } from 'react-router-dom';
import WorkspaceDropOperations from '../UI/WorkspaceDropOperations';
import {useState} from 'react';
import { IWorkSpace } from '../../types/types';

const SettingsMenu = () => {
  const { workSpaces } = useAppSelector(state => state.area)
  const { route } = useParams()
  const navigate = useNavigate()

  const [choosenWorkspace, setChoosenWorkspace] = useState<IWorkSpace|null>(null)

  const onClick = (item:IWorkSpace) => {
    setChoosenWorkspace(item)
    navigate(`/${item.name}-${item.id}/settings/plan`)
  }

  return (
    <div className='settings-menu'>
      <div className='ml-[8px]'>ACCOUNT</div>
      <ul>
        <Link
          to='/settings/account'
          className={`settings-menu-item ${route === 'account' ? 'selected-settings-item' : ''}`}
        >
          Login & Security
        </Link>
        <Link
          to='/settings/support'
          className={`settings-menu-item ${route === 'support' ? 'selected-settings-item' : ''}`}
        >
          Contact Support
        </Link>
      </ul>
      <div className='ml-[8px] mt-[40px]'>WORKSPACES</div>
      <ul>
        {
          workSpaces.map(item =>
            <div key={item.id}>
              <li
                className={`settings-menu-item`}
                onClick={() => onClick(item)}
              >
                {item.name}
              </li>
              <div className="ml-[20px]">
                {item.id === choosenWorkspace?.id && <WorkspaceDropOperations workspace={item}/>}
              </div>
            </div>
          )
        }
      </ul>
    </div>
  );
};

export default SettingsMenu;