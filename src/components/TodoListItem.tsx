import React from 'react';
import styled, { css } from 'styled-components';
import { MdClear } from 'react-icons/md';
import { Todo } from './TodoList';

interface TodoListItemProps {
  todos: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TextBlock = styled.div<{ done: boolean }>`
  display: inline;

  ${props =>
    props.done &&
    css`
      text-decoration: line-through;
    `
  };
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #4470ff;
  width: 20rem;
  border-radius: 0.25rem;
  padding: 0.4375rem;
  color: white;
  margin-bottom: 1rem;

  svg {
    color: #ff476c;
    padding-right: 0.5rem;

    &:hover {
      color: #ffffff;
    }
  }

  & + & {
    margin-top: 1rem;
  }
`

const TodoListItem: React.FC<TodoListItemProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoItem>
      <TextBlock onClick={() => onToggle(todos.id)} done={todos.done}>{todos.text}</TextBlock>
      <MdClear onClick={() => onRemove(todos.id)} />
    </TodoItem>
  );
}

export default TodoListItem;