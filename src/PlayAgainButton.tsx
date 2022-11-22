import { FunctionComponent } from "react";
import styled from "@emotion/styled/macro";

interface PlayAgainButtonProps {
  onClick: Function;
  className?: string;
}

const StyledButton = styled.button`
  height: 80px;
  width: 240px;
  margin: 5px;
  color: #ffffff;
  background-color: #405050;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
`;

const PlayAgainButton: FunctionComponent<PlayAgainButtonProps> = ({
  onClick,
  className,
}) => {
  const clickHandler = () => onClick();
  return (
    <StyledButton className={className} onClick={clickHandler}>
      Play Again?
    </StyledButton>
  );
};

export default PlayAgainButton;
