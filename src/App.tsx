import styled from "@emotion/styled/macro";
import MessageBox from "./MessageBox";
import TicTacToeGrid from "./TicTacToeGrid/TicTacToeGrid";
import { createGame, playerTurn } from "./game";
import { useState } from "react";
import PlayAgainButton from "./PlayAgainButton";

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const StyledGrid = styled(TicTacToeGrid)`
  margin: 1em;
`;

const StyledPlayAgainButton = styled(PlayAgainButton)`
  margin: 1em;
`;

function App() {
  const [game, setGame] = useState(createGame(3, 3));

  const boxClick = (row: number, column: number) => {
    if (!game.gameOver) {
      setGame(playerTurn(game, row, column));
    }
  };

  let playAgainButton = null;

  if (game.gameOver) {
    playAgainButton = (
      <StyledPlayAgainButton onClick={() => setGame(createGame(3, 3))} />
    );
  }

  return (
    <StyledApp>
      <StyledHeader>Tic Tac Toe</StyledHeader>
      <MessageBox game={game} />
      <StyledGrid gridData={game.grid} boxClick={boxClick} />
      {playAgainButton}
    </StyledApp>
  );
}

export default App;
