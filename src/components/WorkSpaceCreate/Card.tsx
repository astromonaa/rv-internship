import React, {FC} from 'react';
import { ICardProps } from '../../types/types';

const Card:FC<ICardProps> = ({plan, choosen, setChoosen}) => {
  return (
    <div className={`cursor-pointer relative px-[20px] py-[12px] border-[1px] rounded ${plan.id === choosen.id ? 'choosen-type' : ''}`} onClick={() => setChoosen(plan)}>
     {plan.name === 'Business' && <div className="recomended-mark">Recomended</div>}
      <h2 className='font-bold text-[1rem] text-black'>{plan.name}</h2>
      <span className='text-[0.7rem] text-[rgba(55,65,81,1)]'>{plan.goal}</span>
      <span className='block text-[0.625rem]'>
        <span className='font-bold'>{plan.type.split('.')[0]}</span>
        <span>{plan.type.split('.')[1]}</span>
      </span>
      <span className="italic text-[0.55rem] lh-[1.375rem]">{plan.desc }</span>
    </div>
  );
};

export default Card;