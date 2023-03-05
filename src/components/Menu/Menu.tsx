import React from 'react';
import WorkSpaces from './WorkSpaces';
import MenuBottomInfo from './MenuBottomInfo';

const Menu = () => {
  return (
    <div className='menu py-[24px] pr-[8px] pl-[12px]'>
      <WorkSpaces/>
      <MenuBottomInfo/>
    </div>
  );
};

export default Menu;