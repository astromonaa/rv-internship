import {FC, createElement} from 'react';
import { IToolsCardProps, IWorkSpace } from '../../types/types';
import { useActions } from '../../hooks/actions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';

const CreateToolsCard:FC<IToolsCardProps> = ({tool}) => {

  const {toggleToolsModal, setCandidateTool} = useActions()
  const {workSpaces} = useAppSelector(state => state.area)
  const {id} = useParams()
  const [current, setCurrent] = useState<IWorkSpace>()

  useEffect(() => {
    setCurrent(
      workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    )
  }, [])

  const handleCreateTool = () => {
    setCandidateTool(tool)
    toggleToolsModal(false)
  }
  return (
    <div
      onClick={handleCreateTool}
      className= {`cursor-pointer rounded border-[1px] px-[16px] py-[24px] flex flex-col items-center justify-between tools-card`}
    >
      {createElement(tool.icon)}
      <h3 className='text-[1rem] lh-[1.5rem] font-medium mt-[30px] mb-[15px]'>{tool.name}</h3>
      <span className='text-[0.7rem] text-[rgba(107,114,128,1)]'>{tool.desc}</span>
    </div>
  );
};

export default CreateToolsCard;