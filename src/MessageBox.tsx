import { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled/macro";

interface MessageBoxProps {
  children: ReactNode;
}

const StyledBox = styled.div`
  border: 2px solid #505050;
  min-width: 75%;
  font-size: 25pt;
  text-align: center;
  margin: 0.5em;
  padding: 0.5em;
`;

const MessageBox: FunctionComponent<MessageBoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default MessageBox;
