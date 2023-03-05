import { FC, useMemo } from "react";
import { IWorkSpace } from "../../../../types/types";
import Form from 'react-bootstrap/Form'
import {ThreeDots} from 'react-bootstrap-icons'
import { useAppSelector } from '../../../../hooks/hooks';
import EmailsItem from "./EmailsItem";

const MembersSetting: FC<IWorkSpace | any> = ({emails}) => {
  

  const emailsList = useMemo(() => {
    return emails.length ? emails.split(' ') : []
  }, [emails])
  
  const {user} = useAppSelector(state => state.auth)
  return (
    <div className='account-info__block'>
      <h2 className='text-[23px]'>Workspace Members</h2>
      <span className="mt-3 mb-3 block">Invite collaborators to give them access to projects in this workspace.</span>

      <div className="account-members-input__wrapper">
        <span>Invite by email address</span>
        <div className="flex justify-start">
          <input type="text" />
          <select className="ml-auto mr-5">
            <option value="admin">Admin</option>
            <option value="labeler">Labeler</option>
          </select>
          <button>Invite</button>
        </div>
      </div>
      <div className="account__members-block">
        <div className="account__members-block__top">
          <span>Name</span>
          <span>Role</span>
        </div>
        <div className="account__members-list">
          <EmailsItem email="Roboflow Support" role="Grant Access" icon={<Form.Check type="switch" id="custom-switch"/>} />
          <EmailsItem email={user?.email} role={user?.role} icon={<ThreeDots/>} />
          <div>
            {
              emailsList.map((emailItem:string) => <EmailsItem email={emailItem} role="User" icon={<ThreeDots/>} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersSetting;