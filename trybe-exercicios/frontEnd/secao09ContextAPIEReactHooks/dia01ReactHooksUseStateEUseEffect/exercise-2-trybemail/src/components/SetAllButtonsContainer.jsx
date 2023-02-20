import React from 'react';
import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import Button from './Button';

function SetAllButtonsContainer(props) {
  const { emailList, setEmailList } = props;
  const setAllRead = () => setEmailList(emailList.map(email => ({ ...email, status: 1 })));
  const setAllUnread = () => setEmailList(emailList.map(email => ({ ...email, status: 0 })));

  return (
    <section id='defaultButtons' className='flex gap-10 justify-center'>
      <Button
        content='Marcar todas como lida'
        icon={ <IoIosMailOpen /> }
        customClasses='flex gap-1 items-center'
        onClickFunction={ setAllRead }
      />
      <Button
        content='Marcar todas como não lida'
        icon={ <IoIosMail /> }
        customClasses='flex gap-1 items-center'
        onClickFunction={ setAllUnread }
      />
    </section>
  );
};

export default SetAllButtonsContainer;
