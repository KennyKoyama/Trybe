import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue(initialValue);
  }

  return {
    value: value,
    onChange: handleChange,
    clearInput
  };
}

export default useFormInput;
