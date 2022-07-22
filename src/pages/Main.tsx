import styled from 'styled-components';
import InputSection from '../components/InputSection';
import ListSection from '../components/ListSection';
import useTodos from '../hooks/api/useTodos';
import { colors } from '../styles/Colors';

function Main() {
  const { isLoading } = useTodos();

  return (
    <>
      <StyledMain>
        <InputSection />
        <ListSection />

        {isLoading && <StyledLoader />}
      </StyledMain>
    </>
  );
}

export default Main;

const StyledMain = styled.main`
  width: 300px;
  background-color: ${colors.green};
`;

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: lightgray;
  opacity: 0.5;
`;
