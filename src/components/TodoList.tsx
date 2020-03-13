import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const Todos: Array<Todo> = [
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
  }
]

function TodoList(){
  return (
    <div>
      {Todos.map(todo => 
        <TodoListItem todos={todo} />  
      )}
    </div>
  )
}

export default TodoList;