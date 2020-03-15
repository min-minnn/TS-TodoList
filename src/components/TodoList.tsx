import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import TodoInput from './TodoInput';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
  {
    id: 1,
    text: '밥 먹기',
    done: false,
  },
  {
    id: 2,
    text: '낮잠 자기',
    done: true,
  },
  {
    id: 3,
    text: '놀기',
    done: false,
  },
]);

const onCreate = (text: string) => {
  const todo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    text,
    done: false
  };

  setTodos(todos => todos.concat(todo));
};

const onRemove = (id: number) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

const onToggle = (id: number) => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    ),
  );
};
  return (
    <div>
      <TodoInput onCreate={onCreate} />
      {todos.map(todo => 
        <div key={todo.id}>
          <TodoListItem onToggle={onToggle} onRemove={onRemove} todos={todo} />  
        </div>
      )}
    </div>
  )
}

export default TodoList;