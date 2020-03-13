import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  /*const onCreate = (text: string): void => {
    const todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text,
      done: false,
    };

    setTodos(todos => todos.concat(todo));
  };*/
  
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
