import { FunctionComponent } from "react";
import styled from "@emotion/styled/macro";
import { GameData } from "./game";

interface MessageBoxProps {
  game: GameData;
}

const StyledBox = styled.div`
  border: 2px solid #505050;
  min-width: 75%;
  font-size: 25pt;
  text-align: center;
  margin: 0.5em;
  padding: 0.5em;
`;

const generateMessage = (game: GameData): string => {
  if (game.gameOver) {
    if (game.winner > 0) {
      return `Player ${game.winner} wins!`;
    } else {
      return "Game Over - Tie";
    }
  } else {
    return `Player ${game.currentPlayer} turn. Click a box.`;
  }
};

const MessageBox: FunctionComponent<MessageBoxProps> = ({ game }) => {
  return <StyledBox>{generateMessage(game)}</StyledBox>;
};

export default MessageBox;
