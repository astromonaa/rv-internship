import {Lightbulb, Gear, Book} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

const MenuBottomInfo = () => {
  return (
    <ul className='mt-[30px]'>
      <li className='menu-bottom-list__item'>
        <Lightbulb size={10}/> Quick Tips
      </li>
      <Link to='/settings/account' className='menu-bottom-list__item'>
        <Gear size={10}/> Settings
      </Link>
      <li className='menu-bottom-list__item'>
        <div>
          <Book size={10}/> Resources
        </div>
      </li>
    </ul>
  );
};

export default MenuBottomInfo;