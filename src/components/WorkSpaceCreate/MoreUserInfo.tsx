import React from 'react';

const MoreUserInfo = () => {
  return (
    <div>
      <label htmlFor="" className='flex items-center justify-between text-[rgba(107,114,128,1)]'>
        <span className='text-[13px]'>Job Title</span>
        <span className='text-[0.75rem] lh-[1rem] italic'>Optional</span>
      </label>
      <input
        type="text"
        className="border-[1px] rounded-lg w-full p-2.5 dark:text-black focus:outline-none focus:border-[blue] px-[12px] py-[8px] text-[13px] transition-all mt-[10px] mb-[30px]"
        placeholder='Enter job title'
      />
      <label htmlFor="" className='flex items-center justify-between text-[rgba(107,114,128,1)]'>
        <span className='text-[13px]' >Phone number</span>
        <span className='text-[0.75rem] lh-[1rem] italic' >Optional</span>
      </label>
      <input
        type="text"
        className="border-[1px] rounded-lg w-full p-2.5 dark:text-black focus:outline-none focus:border-[blue] px-[12px] py-[8px] text-[13px] transition-all mt-[10px]"
        placeholder='Enter phone number'
      />
    </div>
  );
};

export default MoreUserInfo;