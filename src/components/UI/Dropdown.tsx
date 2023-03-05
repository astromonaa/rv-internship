import React, { FC } from 'react';
import { IDropdownProps } from '../../types/types';
import '../../styles/Global.scss'

const Dropdown: FC<IDropdownProps> = ({dropdown, children}) => {
  return (
    <ul className={`dropdown-list list-none absolute top-12 right-3 py-[4px] rounded w-[12rem] bg-white ${dropdown ? 'menu-show' : ''}`}>
      { children }
    </ul>
  );
};

export default Dropdown;