import { StyledField, StyledButton } from "./style";
import Cell from "../cell/cell";
import { useEffect, useState } from "react";
import calculateWinner from "../../helper/helper";

const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let indexArray = index.slice();
const Field: React.FC = () => {
  const [field, setField] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isRobot, setIsRobot] = useState(false);
  const winner = calculateWinner(field);

  function handleClick(index: number): void {
    const fieldCopy = [...field];

    if (winner) {
      xIsNext ? alert("O is winner") : alert("X is winner");
      return;
    }
    if (indexArray.length === 0 && fieldCopy[index]) {
      alert("draw");
      return;
    }

    fieldCopy[index] =
      fieldCopy[index] === null ? (xIsNext ? "X" : "O") : fieldCopy[index];

    setField(fieldCopy);
    setXIsNext(!xIsNext);
    indexArray = indexArray.filter(elem => elem !== index);
  }

  function handleRobot(copy: number[]): void {
    setIsRobot(true);
    const randomNumder = Math.floor(Math.random() * indexArray.length - 1);
    const randomIndex = randomNumder <= 0 ? 0 : randomNumder;
    const randomElement = indexArray[randomIndex];
    if (!copy[randomElement] && xIsNext) {
      handleClick(randomElement);
    }
  }

  const StartNewGame: React.FC = () => {
    return (
      <StyledButton
        onClick={() => {
          setField(Array(9).fill(null));
          setXIsNext(true);
          setIsRobot(false);
          indexArray = index.slice();
        }}>
        Start New Game
      </StyledButton>
    );
  };
  const StartNewGameWithRobot: React.FC = () => {
    return (
      <StyledButton
        onClick={() => {
          handleRobot(field);
        }}>
        Start with Robot
      </StyledButton>
    );
  };

  useEffect(() => {
    if (indexArray.length !== 9 && isRobot) {
      handleRobot(field);
    }
  });

  return (
    <>
      <StyledField>
        {field.map((elem, i) => (
          <Cell
            key={i}
            value={elem}
            onClick={() => handleClick(i)}
            isDisabled={field[i] !== null}
          />
        ))}
      </StyledField>
      <StartNewGame />
      <StartNewGameWithRobot />
    </>
  );
};

export default Field;
