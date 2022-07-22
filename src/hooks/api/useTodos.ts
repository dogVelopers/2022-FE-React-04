import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from '../../store/todos';

import { instance } from '../../libs/api';

interface IGetTodos {
  records: ITodo[];
}

export default function useTodos() {
  const [todos, setTodos] = useRecoilState(todosState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function refreshTodos() {
    setIsLoading(true); // 로딩 시작

    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);

    setIsLoading(false); // 로딩 끝
  }

  useEffect(() => {
    refreshTodos();
  }, []);

  async function createTodo(value: string) {
    await instance.post('/todo', { fields: { name: value } });
    refreshTodos();
  }

  async function deleteTodo(todoId: string) {
    await instance.delete(`/todo/${todoId}`);
    refreshTodos();
  }

  return { todos, createTodo, deleteTodo, isLoading };
}
