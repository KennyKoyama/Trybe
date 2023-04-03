import React from 'react';
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import Button from './Button';


function EmailCardButtons(props) {
  const { id, emailList, setEmailList } = props;
  const setRead = () => setEmailList(emailList.map(email => email.id === id ? { ...email, status: 1 } : email));
  const setUnread = () => setEmailList(emailList.map(email => email.id === id ? { ...email, status: 0 } : email));

  return (
    <div
      id='emailButtons'
      className='flex gap-2'
    >
      <Button
        content={ <IoIosMailOpen /> }
        onClickFunction={ setRead }
      />
      <Button
        content={ <IoIosMail /> }
        onClickFunction={ setUnread }
      />
    </div>
  );
};

export default EmailCardButtons;
