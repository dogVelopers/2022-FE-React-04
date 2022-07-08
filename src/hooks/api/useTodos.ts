import { useEffect, useState } from 'react';

import { instance } from '../../libs/api';

interface IGetTodos {
  records: ITodo[];
}

export default function useTodos() {
  // todo 들이 저장되는
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function refreshTodos() {
    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);
  }

  useEffect(() => {
    refreshTodos();
  }, []);

  async function createTodo(value: string) {
    await instance.post('/todo', { fields: { name: value } });
    refreshTodos();
  }

  return { todos, createTodo };
}
