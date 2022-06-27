import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [number, setNumber] = useState<number>(1);

  return (
    <div className="App">
      <StyledH1 num={number} backgroundColor="green">
        안녕하세요
      </StyledH1>
      <p>{number}</p>
      <button onClick={() => setNumber(prev => prev + 1)}>up</button>
    </div>
  );
}

export default App;

interface StyledH1Props {
  num: number;
  backgroundColor: string;
}

const StyledH1 = styled.h1<StyledH1Props>`
  /* color: ${props => (props.num % 2 === 0 ? 'red' : 'blue')}; */
  color: ${({ num }) => (num % 2 == 0 ? 'red' : 'blue')};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
