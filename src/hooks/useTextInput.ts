import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

function useTextInput({ initialValue = '' }: Props) {
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange };
}

export default useTextInput;
