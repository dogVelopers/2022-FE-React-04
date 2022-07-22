import { FormEvent } from 'react';
import useTodos from '../hooks/api/useTodos';
import useTextInput from '../hooks/useTextInput';

// props drilling
export default function InputSection() {
  const { createTodo } = useTodos();
  const { value, onChange, clearValue } = useTextInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
    clearValue();
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button>저장</button>
      </form>
    </section>
  );
}
