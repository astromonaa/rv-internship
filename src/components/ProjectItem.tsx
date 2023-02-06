import React, {FC} from 'react';
import { IProject } from '../types/types';
import {Lock, ThreeDotsVertical, Gem, CardImage} from 'react-bootstrap-icons'

const ProjectItem:FC<{project: IProject}> = ({project}) => {
  return (
    <div className='p-[12px] border-[1px] rounded project-item'>
      <div className='flex items-start'>
        <div className='project-item-img'></div>
        <div className='ml-[15px]'>
          <Lock className="inline-block mr-[10px]" fill='blue'/>
          <span>{project.name}</span>
          <div className='project-detecting'>{project.detecting.toUpperCase()}</div>
          <small>Modified 2 minutes ago</small>
        </div>
        <div className='three-dots'>
          <ThreeDotsVertical size="12px" />
        </div>
      </div>
      <div className='text-[10px] flex mt-[5px]'>
        <small className='flex items-center mr-[10px]'>
          <Gem className='mr-[5px]' fill='blue'/> KMI
        </small>
        <small className='flex items-center'>
          <CardImage className='mr-[5px]' fill='blue'/> 0 IMAGES
        </small>
      </div>
    </div>
  );
};


export default ProjectItem;