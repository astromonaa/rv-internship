import { useAppSelector } from '../../hooks/hooks';
import CreateToolsCard from './CreateToolsCard';
import { FC } from 'react';

const CreateToolsModal:FC = () => {
  const {toolsCards} = useAppSelector(state => state.area)
  return (
    <div className='w-[512px]'>
      <div className="cards py-[32px] px-[24px] flex justify-between items-center">
        {
          toolsCards.map(item => <CreateToolsCard key={item.id} tool={item}/>)
        }
      </div>
    </div>
  );
};

export default CreateToolsModal;