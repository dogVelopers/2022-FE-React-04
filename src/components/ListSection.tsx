import { useEffect, useState } from 'react';

interface Props {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
}

export default function ListSection({ todos, deleteTodo }: Props) {
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
        </div>
      ))}
    </section>
  );
}
