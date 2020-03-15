import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

interface TodoInputProps {
  onCreate: (text: string) => void;
}

const Add = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;

  &:hover {
    color: #52525a;
  }

  svg {
    font-size: 1rem;

    &:hover {
      color: #a0a0a0;
    }
  }
`;

const TodoAddBlock = styled.div`
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 18.75rem;
  border: none;
  margin-top: 1rem;
  border-bottom: 0.0625rem solid #ff476c;
  font-size: 1rem;
  font-family: 'Roboto';
`

const TodoInput: React.FC<TodoInputProps> = ({ onCreate }) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (!value) {
      alert('할 일을 입력하세요.');
    } else {
      onCreate(value);
      setValue('');
    }
  };

  return (
    <TodoAddBlock>
      <Input value={value} onChange={onChange} />
      <Add onClick={onClick}>
        <MdAdd />
      </Add>
    </TodoAddBlock>
  )
}

export default TodoInput;