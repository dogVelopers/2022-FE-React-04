import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

export default function useTextInput({ initialValue = '' }: Props) {
  const [value, setValue] = useState<string>(initialValue);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clearValue() {
    setValue('');
  }

  return { value, onChange, clearValue };
}
