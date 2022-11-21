import { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled/macro";
import TicTacToeBox from "./TicTacToeBox";
import { GridData } from "../types";

interface TicTacToeGridProps {
  className?: string;
  gridData: GridData;
}

const renderBoxes = (gridData: GridData): ReactNode[] => {
  return gridData.reduce((boxComponents: ReactNode[], row) => {
    row.forEach((box) => {
      boxComponents.push(<TicTacToeBox content={box} />);
    });
    return boxComponents;
  }, []);
};

const TicTacToeGrid: FunctionComponent<TicTacToeGridProps> = ({
  gridData,
  className,
}) => {
  return <div className={className}>{renderBoxes(gridData)}</div>;
};

const StyledTicTacToeGrid = styled(TicTacToeGrid)`
  display: grid;
  grid-template-rows: repeat(${(props) => props.gridData.length}, 100px);
  grid-template-columns: repeat(${(props) => props.gridData[0].length}, 100px);
`;

export default StyledTicTacToeGrid;
