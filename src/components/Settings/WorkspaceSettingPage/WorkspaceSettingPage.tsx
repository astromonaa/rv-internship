import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PlanSetting from './PlanSetting';
import UsageSetting from './UsageSetting';
import { IWorkSpace } from '../../../types/types';
import { useAppSelector } from '../../../hooks/hooks';
import MembersSetting from './MembersSettings/MembersSetting';

const WorkspaceSettingPage = () => {
  const location = useLocation()

  const { workSpaces } = useAppSelector(state => state.area)

  const [operation, setOperation] = useState<string>('')
  const [current, setCurrent] = useState<IWorkSpace>()

  useEffect(() => {
    const path = location.pathname.split('/')
    setOperation(path[3])
  }, [location.pathname.split('/')[3]])

  useEffect(() => {
    const path = location.pathname.split('/')
    setCurrent(
      workSpaces.find(el => el.id === Number(path[1].split('-')[1]))
    )
  }, [location.pathname.split('/')[1]])


  return (
    <>
      <div className='flex justify-between h-[min-content] mb-[15px]'>
        <span className='text-[1.5rem] font-medium'>{current?.name}: Settings</span>
        <button className='back__to__workspace'>Back to Workspace</button>
      </div>
      <hr className='opacity-[0.1]' />
      {operation === 'plan' && <PlanSetting />}
      {operation === 'usage' && <UsageSetting {...current} />}
      {operation === 'members' && <MembersSetting {...current}/>}
    </>
  );
};

export default WorkspaceSettingPage;