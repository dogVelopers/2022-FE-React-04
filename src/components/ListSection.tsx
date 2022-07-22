import { useEffect, useState } from 'react';
import useTodos from '../hooks/api/useTodos';

import { Link } from 'react-router-dom';

export default function ListSection() {
  const { deleteTodo, todos } = useTodos();

  function onClickDeleteBtn(id: string) {
    if (confirm('삭제할꺼?')) {
      deleteTodo(id);
    }
  }

  return (
    <section>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.fields.name}</span>
          <button onClick={() => onClickDeleteBtn(todo.id)}>X</button>
          <Link to={`/todos/${todo.id}`}>자세히 보기</Link>
        </div>
      ))}
    </section>
  );
}
