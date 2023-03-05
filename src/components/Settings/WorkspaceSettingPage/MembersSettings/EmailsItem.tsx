import React, {FC} from 'react';

const EmailsItem:FC<{email?: string; role?: string; icon?:any}> = ({email, role, icon}) => {
  return (
    <div className="account__members-list__item" >
      <div>{email}</div>
      <div className="members-list__item__right">
        {role?.toLowerCase()} {icon}
      </div>
    </div>
  );
};

export default EmailsItem;