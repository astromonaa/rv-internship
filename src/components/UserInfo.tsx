import { Umbrella, Pencil, PersonAdd, Gear } from 'react-bootstrap-icons'
import { FC, useState, useEffect } from 'react';
import { IWorkSpace } from '../types/types';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/actions';

const UserInfo:FC<IWorkSpace|any> = ({name}) => {
  const {changeWorkSpaceItem} = useActions()
  const [inputVisible, setInputVisible] = useState(false)
  const [value, setValue] = useState<string>('')
  const {id} = useParams()

  useEffect(() => {
    setValue(name)
  },[name])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      const spaceId = Number(id?.split('-')[1])
      const data = {id: spaceId, value, fieldValue: 'name'}
      changeWorkSpaceItem(data)
      setInputVisible(false)
    }
  }

  return (
    <div className='px-[38px]'>
      <section className='mt-[40px] grid grid-cols-[min-content_min-content_1fr] items-center border-b-[1px] pb-[15px]'>
        <div className='rounded-[50%] border-[1px] hover:border-[blue] hover:bg-[rgba(242,230,254,1)] transition-all w-[32px] h-[32px] flex items-center justify-center'>
          <Umbrella />
        </div>
        <div className='ml-[15px] flex rounded-lg hover:bg-[rgba(242,230,254,1)] py-[7px] px-[5px] items-center relative'>
          <span className='mr-[10px] text-[1.125rem] lh-[1.75rem] text-[rgba(103,6,206,1)]'>{name}</span>
          <Pencil onClick={() => setInputVisible(true)} />
          <input
            type="text"
            className={`user-info-name-input ${inputVisible ? 'visible' : ''}`}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className='flex items-center ml-auto gap-2'>
          <div className="user-ava">U</div>
          <div className="space-info-top-btn flex items-center">
            <PersonAdd />
            <span className='ml-[7px]'>Invite</span>
          </div>
          <div className="space-info-top-btn flex items-center">
            <Gear />
            <span className='ml-[7px]'>Settings</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;