import { FC } from 'react';
import { useActions } from '../../hooks/actions';
import { IBtnActiveFC } from '../../types/types';

const MemebersAddInput:FC<IBtnActiveFC> = ({inputRef, setRole}) => {
  const {setButtonActive} = useActions()

  const handleChange = () => {
    inputRef?.current?.value?.trim().length! > 0 && setButtonActive(true)
  }
  const handleSetRole = (event: React.FormEvent<HTMLSelectElement>) => {
    setRole(event.currentTarget.value)
  }
  return (
    <div>
      <textarea
        className="rounded-md px-[12px] py-[8px] w-full focus:outline-none border-[1px] focus:border-[blue] text-[13px] min-h-[10vh] lh-[1rem] resize-none"
        placeholder="Invite emails..."
        ref={inputRef}
        onChange={handleChange}

      />
      <div className='flex items-center text-[13px] gap-[0.5rem] mt-2'>
        <span>Role:</span>
        <select
          className='py-[8px] pl-[12px] pr-[32px] focus:outline-none border-[1px] border-[rgba(156,163,175,1)] rounded'
          onClick={handleSetRole}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>
  );
};

export default MemebersAddInput;