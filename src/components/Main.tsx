import React from 'react';
import WorkSpaceCreate from './WorkSpaceCreate/WorkSpaceCreate';
import { useAppSelector } from '../hooks/hooks';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IWorkSpace } from '../types/types';
import WorkSpaceInfo from './WorkSpaceInfo';

const Main = () => {
  const {workSpaces} = useAppSelector(state => state.area)
  const {toolsModal} = useAppSelector(state => state.modal)
  const {id} = useParams()
  const [current, setCurrent] = useState<IWorkSpace>()
  
  useEffect(() => {
    const currentSpace = workSpaces.find(el => el.id === Number(id?.split('-')[1]))
    setCurrent(currentSpace)
  }, [id])
  return (
    <main className='main'>
      {(!workSpaces.length || !id || !current?.type || toolsModal) && <WorkSpaceCreate/>}
      {current && current.type &&  <WorkSpaceInfo/>}
    </main>
  );
};

export default Main;