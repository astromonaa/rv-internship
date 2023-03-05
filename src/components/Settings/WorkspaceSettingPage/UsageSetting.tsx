import React, { FC } from 'react';
import { IWorkSpace } from '../../../types/types';
import { useMemo } from 'react';

const UsageSetting: FC<IWorkSpace | any> = (workspace) => {

  const emailsCount = useMemo(() => {
    return workspace.emails.length ? workspace.emails.split(' ').length : 0
  }, [workspace])

  const projectsCount = useMemo(() => {
    return workspace.Projects.length
  }, [workspace])

  return (
    <div className='account-info__block'>
      <h2 className='text-[23px]'>Workspace Usage This Month</h2>

      <section>
        <div className='account-usage-item'>
          <div className='flex flex-col'>
            <span>Team Members</span>
            <span>{emailsCount} are included in your plan</span>
          </div>
          <div>{emailsCount}</div>
        </div>
        <hr />
        <div className='account-usage-item'>
          <div className='flex flex-col'>
            <span>Projects</span>
            <span>{projectsCount} are included in your plan</span>
          </div>
          <div>{projectsCount}</div>
        </div>
        <hr />
        <div className='account-usage-item'>
          <div className='flex flex-col'>
            <span>Source Images</span>
            <span>1,000 are included in your plan</span>
          </div>
          <div>0</div>
        </div>
        <hr />
        <div className='account-usage-item'>
          <div className='flex flex-col'>
            <span>Generated Images</span>
            <span>5,000 are included in your plan</span>
          </div>
          <div>0</div>
        </div>
      </section>
    </div>
  );
};

export default UsageSetting;