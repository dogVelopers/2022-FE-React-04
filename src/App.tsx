import styled from 'styled-components';
import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import useTodos from './hooks/api/useTodos';

function App() {
  // 여기서 선언을 해야함
  const { createTodo, todos } = useTodos();

  return (
    <StyledMain>
      <InputSection createTodo={createTodo} />
      <ListSection todos={todos} />
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  width: 300px;
  background-color: green;
`;
