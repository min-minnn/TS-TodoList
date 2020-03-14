import React from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Background = styled.div`
  width: 30rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 4rem;
  box-shadow: 0rem 0rem 1.25rem #d7d7d7;
  font-family: 'Roboto';
  font-size: 1rem;
`

const App: React.FC = () => {
  return (
    <Background>
      <TodoList />
    </Background>
  );
}

export default App;
