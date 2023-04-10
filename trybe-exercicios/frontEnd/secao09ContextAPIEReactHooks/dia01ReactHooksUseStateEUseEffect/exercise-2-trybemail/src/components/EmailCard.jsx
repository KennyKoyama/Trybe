import React from 'react';
import EmailCardButtons from './EmailCardButtons';

function EmailCard(props) {
  const { id, title, status, emailList, setEmailList } = props;
  const statusClass = status => status === 1 ? 'font-light' : 'font-medium';

  return (
    <div
      id='emailCard'
      className='flex gap-5 justify-between items-center rounded p-3 hover:shadow-[0_0_0.2rem_0_#22c55e]'
    >
      <p
        id='emailTitle'
        className={ statusClass(status) }
      >
        { title }
      </p>
      <EmailCardButtons
        {
          ...{
            id,
            emailList,
            setEmailList,
          }
        }
      />
    </div>
  )
}

export default EmailCard;
