import SettingsMenu from '../components/Settings/SettingsMenu';
import UserProfile from '../components/Settings/UserProfile';
import ContactUs from '../components/Settings/ContactUs';
import WorkspaceSettingPage from '../components/Settings/WorkspaceSettingPage/WorkspaceSettingPage';
import { useWorkspaces } from '../hooks/useWorkspaces';
import { useAppSelector } from '../hooks/hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Settings.scss'

const Settings = () => {
  const { fetchWorkspaces } = useWorkspaces()
  const { workSpaces } = useAppSelector(state => state.area)
  const { route, operation } = useParams()

  useEffect(() => {
    if (!workSpaces.length) {
      fetchWorkspaces(null)
    }
  }, [])
  return (
    <div className='settings'>
      <SettingsMenu />
      <div className='p-[32px]'>
        {route &&
          <div className='account-info__block'>
            {route === 'account' && <UserProfile />}
            {route === 'support' && <ContactUs />}
          </div>
        }
        {operation && <WorkspaceSettingPage />}
      </div>
    </div>
  );
};

export default Settings;