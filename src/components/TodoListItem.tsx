import React from "react";
import styled from "styled-components";
import { MdClear } from "react-icons/md";

interface TodoListItemProps {
  todos:
  {
    id: number;
    text: string;
    done: boolean;
  }
}

const Todo = styled.p`
  background: #4470ff;
  width: 320px;
  height: 21px;
  border-radius: 4px;
  padding: 7px;
  color: white;
`

const TodoListItem: React.FC<TodoListItemProps> = ({ todos }) => {
  return (
    <div key={todos.id}>
      <Todo>{todos.text}<MdClear /></Todo>
    </div>
  );
}

export default TodoListItem;