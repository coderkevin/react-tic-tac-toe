import { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled/macro";
import TicTacToeBox from "./TicTacToeBox";
import { GridData } from "../game";

interface TicTacToeGridProps {
  className?: string;
  gridData: GridData;
  boxClick: Function;
}

const renderBoxes = (gridData: GridData, boxClick: Function): ReactNode[] => {
  return gridData.reduce((boxComponents: ReactNode[], row, rowIndex) => {
    row.forEach((box, columnIndex) => {
      boxComponents.push(
        <TicTacToeBox
          key={`${rowIndex},${columnIndex}`}
          content={box}
          onClick={() => boxClick(rowIndex, columnIndex)}
        />
      );
    });
    return boxComponents;
  }, []);
};

const TicTacToeGrid: FunctionComponent<TicTacToeGridProps> = ({
  gridData,
  className,
  boxClick,
}) => {
  return <div className={className}>{renderBoxes(gridData, boxClick)}</div>;
};

const StyledTicTacToeGrid = styled(TicTacToeGrid)`
  display: grid;
  grid-template-rows: repeat(${(props) => props.gridData.length}, 100px);
  grid-template-columns: repeat(${(props) => props.gridData[0].length}, 100px);
`;

export default StyledTicTacToeGrid;
