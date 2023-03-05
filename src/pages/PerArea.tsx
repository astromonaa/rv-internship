import Main from "../components/Main"
import Menu from "../components/Menu/Menu"
import '../styles/PerArea.scss'
import { useWorkspaces } from '../hooks/useWorkspaces';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';

const PerArea = () => {
  const {fetchWorkspaces} = useWorkspaces()
  const {workSpaces} = useAppSelector(state => state.area)
  useEffect(() => {
    if (!workSpaces.length) {
      fetchWorkspaces(null)
    }
  }, [])
  return (
    <div className="per-area">
      <Menu />
      <Main />
    </div>
  );
};

export default PerArea;