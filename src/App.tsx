import styled from "@emotion/styled/macro";
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid";
import { BoxContent } from "./types";

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16pt;
  color: white;
`;

const StyledHeader = styled.header`
  flex-grow: 0;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22pt;
  background-color: #383c44;
  color: white;
  padding: 1em;
`;

const StyledBody = styled.div`
  flex-grow: 1;
  padding: 1em;
`;

function App() {
  const gridData = [
    [BoxContent.X, BoxContent.O, BoxContent.X],
    [BoxContent.X, BoxContent.O, BoxContent.X],
    [BoxContent.X, BoxContent.O, BoxContent.X],
  ];

  return (
    <StyledApp>
      <StyledHeader>Tic Tac Toe</StyledHeader>
      <StyledBody>
        <TicTacToeGrid gridData={gridData} />
      </StyledBody>
    </StyledApp>
  );
}

export default App;
