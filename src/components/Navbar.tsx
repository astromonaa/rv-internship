import { useState } from 'react'
import LogoMark from '../assets/logomark.svg'
import WordMark from '../assets/wordmark.svg'
import { Bell, ChevronDown } from 'react-bootstrap-icons'
import { useAppSelector } from '../hooks/hooks';
import { useAuth } from '../hooks/useAuth';
import Dropdown from './UI/Dropdown';
import { navbarDropOperations } from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.scss'

const Navbar = () => {
  const { user } = useAppSelector(state => state.auth)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const [dropdown, setDropdown] = useState(false)

  const dropdownListClick = (event: React.MouseEvent<HTMLLIElement>, operation: string) => {
    event.stopPropagation()
    if (operation === 'logout') {
      logout(null)
    }
  }

  return (
    <div className="font-bold flex items-center bg-[rgba(31,41,55,1)] h-[4rem] px-[2rem] w-full text-[rgba(209,213,219,1)] justify-between">
      <div className="nav-left flex">
        <div className="logo flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={LogoMark} alt="logo" className="w-[32px] h-[32px]" />
          <img src={WordMark} alt="logo" className='m-2 ml-3 w-[87px]' />
        </div>
        <ul className='ml-[1rem] grid grid-cols-[min-content_min-content_min-content_1fr] gap-[1rem]'>
          <li className='rounded hover:bg-[rgba(55,65,81,1)] py-[8px] px-[12px] text-center cursor-pointer transition-all text-[0.875rem] font-medium'>Projects</li>
          <li className='rounded hover:bg-[rgba(55,65,81,1)] py-[8px] px-[12px] text-center cursor-pointer transition-all text-[0.875rem] font-medium'>Universe</li>
          <li className='rounded hover:bg-[rgba(55,65,81,1)] py-[8px] px-[12px] text-center cursor-pointer transition-all text-[0.875rem] font-medium'>Documentation</li>
          <li className='rounded hover:bg-[rgba(55,65,81,1)] py-[8px] px-[12px] text-center cursor-pointer transition-all text-[0.875rem] font-medium'>Forum</li>
        </ul>
      </div>
      <div className="nav-right flex items-center">
        <div
          className="transition-all cursor-pointer notification-bell px-[0.35rem] py-[0.35rem] rounded-[50%] border-2 border-[rgba(31,41,55,1)] hover:bg-[rgba(55,65,81,1)] hover:border-[white] active:bg-[rgba(17,24,39,1)]"
        >
          <Bell />
        </div>
        <div
          className="user-name ml-5 rounded hover:bg-[rgba(55,65,81,1)] px-[12px] py-[8px] flex items-center cursor-pointer relative"
          onClick={() => setDropdown(!dropdown)}
        >
          <span className='text-[13px]'>{user?.email}</span>
          <ChevronDown className='ml-[5px]' width={15} height={15} />
          <Dropdown dropdown={dropdown}>
            {
              navbarDropOperations.map(operation =>
                <li
                  className="whitespace-nowrap text-[rgba(55,65,81,1)] px-[16px] py-[8px] text-[0.875rem] hover:bg-[rgba(243,244,246,1)] active:text-white transition-all"
                  onClick={e => dropdownListClick(e, operation.operation)}
                  key={operation.operation}
                >
                  {operation.value}
                </li>
              )
            }
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;