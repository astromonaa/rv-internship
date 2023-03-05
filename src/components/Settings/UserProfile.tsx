import { useAppSelector } from '../../hooks/hooks';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = () => {
  const {user} = useAppSelector(state => state.auth)
  const {logout} = useAuth()
  return (
    <div>
      <h2 className='text-[24px] mb-3'>Your Profile</h2>
      <p>You are signed in with your email</p>
      <div className='flex items-center mt-3'>
        <img src="" alt="" className='w-[100px] flex items-center justify-center' />
        <div>
          <span className='font-medium block mb-3'>{user?.email}</span>
          <button
            className='px-[16px] py-[8px] rounded bg-[rgba(0,255,206,1)] hover:bg-[rgba(0,235,190,1)] active:bg-[rgba(138,255,232,1)]'
            onClick={() => logout(null)}
            >Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;