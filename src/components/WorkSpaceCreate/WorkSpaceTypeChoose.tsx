import { useAppSelector } from '../../hooks/hooks';
import Card from './Card';
import {FC, useState} from 'react';
import { WorkSpaceTypeChooseProps } from '../../types/types';

const WorkSpaceTypeChoose:FC<WorkSpaceTypeChooseProps> = ({choosenPlan, setChoosenPlan}) => {
  const {workSpacePlans} = useAppSelector(state => state.area)
  return (
    <div className='d-flex justify-between'>
      {
        workSpacePlans.map(plan => <Card key={plan.id} plan={plan} choosen={choosenPlan} setChoosen={setChoosenPlan} />)
      }
    </div>
  );
};

export default WorkSpaceTypeChoose;