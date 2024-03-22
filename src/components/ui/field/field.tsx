import { StyledField, StyledButton, StyledSteps } from "./style";
import Cell from "../cell/cell";
import { useEffect, useState } from "react";
import calculateWinner from "../../helper/helper";
import Modal from "../modal/modal";

const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let indexArray = index.slice();
const Field: React.FC = () => {
  const [field, setField] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isRobot, setIsRobot] = useState(false);
  const [modalProps, setModalProps] = useState<boolean | null | undefined>(
    null
  );
  const [previousSteps, setPreviousSteps] = useState<any[]>([]);
  const winner = calculateWinner(field);

  function handleClick(index: number): void {
    const fieldCopy = [...field];

    fieldCopy[index] =
      fieldCopy[index] === null ? (xIsNext ? "X" : "O") : fieldCopy[index];

    setField(fieldCopy);
    setPreviousSteps([...previousSteps, field]);
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
  const handleStart = () => {
    setField(Array(9).fill(null));
    setXIsNext(true);
    setIsRobot(false);
    indexArray = index.slice();
    setPreviousSteps([]);
  };

  const StartNewGame: React.FC = () => {
    return (
      <StyledButton
        onClick={() => {
          handleStart();
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

  useEffect(() => {
    if (winner) {
      handleStart();
      setTimeout(() => {
        setModalProps(!xIsNext);
      }, 100);
    }
    if (indexArray.length === 0) {
      handleStart();
      setTimeout(() => {
        setModalProps(undefined);
      }, 100);
    }
  }, [xIsNext, winner]);

  return (
    <>
      {modalProps !== null && (
        <Modal xIsWinner={modalProps} setState={setModalProps} />
      )}
      {!isRobot && (
        <StyledSteps>
          {previousSteps.map(
            (step, index) =>
              index !== 0 && (
                <StyledButton
                  key={`step-${index}`}
                  onClick={() => {
                    setField(step);
                    setPreviousSteps(
                      previousSteps.slice(0, previousSteps.indexOf(step))
                    );
                  }}>
                  {index} step
                </StyledButton>
              )
          )}
        </StyledSteps>
      )}
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
