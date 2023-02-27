import React from 'react';

function Button(props) {
  const { content, customClasses, onClickFunction, icon } = props;

  return (
    <button
      type='button'
      className={ [
        'bg-blue-700',
        'text-white',
        'p-2',
        'rounded-md',
        'shadow-sm',
        'shadow-gray-400',
        customClasses,
      ].join(' ') }
      onClick={ onClickFunction }
    >
      {icon && icon}
      { content }
    </button>
  );
};

export default Button;
