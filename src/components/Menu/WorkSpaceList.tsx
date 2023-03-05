import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom'
import { IWorkSpace } from '../../types/types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WorkSpaceList = () => {
  const { workSpaces } = useAppSelector(state => state.area)
  const navigate = useNavigate()
  const [current, setCurrent] = useState<IWorkSpace>()
  const {id} = useParams()

  useEffect(() => {
    setCurrent(
      workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    )
  },[id])

  const openWorkSpace = (item: IWorkSpace) => {
    navigate(`/workspaces/${item.name}-${item.id}`)
  }
  return (
    <div className='menu-workspacelist'>
      {workSpaces.length ?
        workSpaces.map(item =>
          <div
            key={item.id}
            onClick={() => openWorkSpace(item)}
            className={`workspace-item px-[16px] py-[8px] border-[1px] border-[transparent] rounded-md text-[13px] mb-[10px] ${item.id === current?.id ? 'current-workspace' : ''}`}
          >
            {item.name}
          </div>
        )
        :
        <div
          className="workspace-item px-[16px] py-[8px] border-[1px] border-[blue] rounded-md text-[13px]"
        >WorkSpace Name</div>
       }
    </div>
  );
};

      export default WorkSpaceList;