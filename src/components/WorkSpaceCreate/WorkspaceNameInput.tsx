import React, { createElement, FC, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { ICompanyNameInputProps } from '../../types/types';
import { useActions } from '../../hooks/actions';

const WorkspaceNameInput: FC<ICompanyNameInputProps> = ({ inputRef, choosen, setChoosenType }) => {

  const { inputShow, buttons } = useAppSelector(state => state.area)
  const { setButtonActive, toggleInput } = useActions()

  const chooseType = (button: any) => {
    setChoosenType(button)
    toggleInput(true)
  }

  const handleChange = () => {
    if (inputRef.current?.value?.trim()?.length! > 0) {
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }
  return (
    <>
      <div className="btns grid grid-cols-3 gap-[2rem]">
        {
          buttons.map(({ id, icon, text, type }) =>
            <button
              key={id}
              className={`type-btn flex items-center gap-2 border-[1px] rounded-[0.375rem] border-[rgba(229,231,235,1)] px-[12px] py-[8px] ${choosen?.id === id ? 'choosen' : ''}`}
              onClick={() => chooseType({ id, text, type })}
            >
              {createElement(icon)}
              {text}
            </button>)
        }
      </div>
      <div className={`name-input-wrapper mt-[30px] ${!inputShow ? 'hide' : 'show'}`}>
        <label htmlFor="workspace_name_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company name</label>
        <input
          type="text"
          id="workspace_name_input"
          className="border-[1px] rounded-lg w-full p-2.5 dark:text-black focus:outline-none focus:border-[blue] px-[12px] py-[8px] text-[13px] transition-all"
          placeholder="Enter name..."
          required
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default WorkspaceNameInput;