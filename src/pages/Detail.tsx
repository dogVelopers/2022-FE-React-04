import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../libs/api';

export default function Detail() {
  const [todo, setTodo] = useState<ITodo | null>(null);

  const { todoId } = useParams();

  useEffect(() => {
    async function saveTodo() {
      const response = await instance.get<{}, ITodo>(`/todo/${todoId}`);
      setTodo(response);
    }

    saveTodo();
  }, []);

  return (
    <div>
      <h1>detail</h1>
      <p>{todoId}</p>

      <p>{todo?.fields.name}</p>
      <p>{todo?.createdTime}</p>
    </div>
  );
}
