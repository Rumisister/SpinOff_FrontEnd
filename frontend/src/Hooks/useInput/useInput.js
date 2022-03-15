import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  const onReset = () => {
    setValue('');
  };
  return { value, onChange, onReset };
};

export default useInput;
