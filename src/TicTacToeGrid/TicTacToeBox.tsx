import { FunctionComponent } from "react";
import styled from "@emotion/styled/macro";
import { BoxContent } from "../types";

interface TicTacToeBoxProps {
  content: BoxContent;
}

const StyledBox = styled.div``;

const TicTacToeBox: FunctionComponent<TicTacToeBoxProps> = ({ content }) => {
  let contentComponent = <span />;

  if (content === BoxContent.X) {
    contentComponent = <span>X</span>;
  }

  if (content === BoxContent.O) {
    contentComponent = <span>O</span>;
  }

  return <StyledBox>{contentComponent}</StyledBox>;
};

export default TicTacToeBox;
