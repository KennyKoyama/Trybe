import React, { useEffect } from 'react';
import EmailCard from './EmailCard';

function EmailList(props) {
  const { emailList, setEmailList } = props;

  useEffect(() => {
    let allRead;
    if (emailList.every((email) => email.status === 1)) {
      allRead = setTimeout(
        () => alert('Parabéns! Você leu todas suas mensagens!'),
        200,
      );
    }
    return () => {
      clearTimeout(allRead);
    };
  }, [emailList]);

  return (
    <section
      id='emailList'
      className='flex flex-col gap-6 rounded-md p-6 self-center shadow-[0_0_0.5rem_rgba(0,0,0,0.3)]'
    >
      {
        emailList.map(
          ({ id, title, status }) => (
            <EmailCard
              key={ id }
              { ...{ id, title, status, emailList, setEmailList } }
            />
          ),
        )
      }
    </section>
  );
};

export default EmailList;
