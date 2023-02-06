import { FC } from 'react';
import { StartInfoProps } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';
import { useActions } from '../../hooks/actions';

const StartInfo: FC<StartInfoProps> = ({ children, handleClick, workSpaceAdd }) => {

  const { buttonActive, inputDescText, paginationCurrent, buttonText } = useAppSelector(state => state.area)
  const { setPage, setButtonActive } = useActions()

  const createBack = () => {
    setPage(paginationCurrent-1)
    setButtonActive(false)
  }
  const skipInfo = () =>{
   if (paginationCurrent < 4) {
      setPage(paginationCurrent + 1)
      setButtonActive(true)
   }else {
      workSpaceAdd()
   }
  }
  return (
    <div className='start-btns px-[48px]'>
      <div className='text-[13px] line-[1rem] mb-[10px] flex justify-between'>
        <span>{inputDescText}</span> {paginationCurrent === 2 && <span className='ml-auto inline-block italic opacity-[0.5]'>Comma Separated</span>}
      </div>
      {/*  HERE IS CHILDREN COMPONENT FROM PARENT*/}
      {children}

      <div className='flex gap-[0.75rem] items-center justify-end mt-[30px] mb-[24px]'>
        {paginationCurrent > 1 && paginationCurrent < 4 && <button className='form-btn' onClick={createBack}>Back</button>}
        {(paginationCurrent === 2 || paginationCurrent === 4) && <button className='form-btn' onClick={skipInfo}>Skip</button>}
        <button
          className={`px-[16px] py-[8px] bg-blue-700 text-white rounded-lg text-[13px] flex ${!buttonActive ? 'disabled' : ''}`}
          disabled={!buttonActive}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default StartInfo;