import { StyledField, StyledButton, StyledSteps, StyledSelect } from "./style";
import Cell from "../cell/cell";
import { useEffect, useState } from "react";
import calculateWinner from "../../helper/helper";
import Modal from "../modal/modal";
import { findBestMove as minimax } from "../../helper/minimax";

const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const myAudio = new Audio(require("../../../media/music.mp3"));
myAudio.currentTime += 6.5;
myAudio.volume = 0.3;
myAudio.loop = true;

let indexArray = index.slice();

interface IField {
  [key: string]: React.Dispatch<React.SetStateAction<number>>;
}

const Field: React.FC<IField> = ({ setX, setO, setDraws }) => {
  const [field, setField] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isRobot, setIsRobot] = useState(false);
  const [modalProps, setModalProps] = useState<boolean | null | undefined>(
    null
  );
  const [isStart, setIsStart] = useState(false);
  const [previousSteps, setPreviousSteps] = useState<any[]>([]);
  const [selectedMode, setSelectedMode] = useState<string>("standart");
  const winner = calculateWinner(field);

  function handleClick(index: number): void {
    const fieldCopy = [...field];
    if (selectedMode === "standart") setIsRobot(false);

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
    const randomElement =
      selectedMode === "simple-bot" ? indexArray[randomIndex] : minimax(copy)!;

    if (!copy[randomElement] && !xIsNext) {
      handleClick(randomElement);
    }
  }
  // алгоритм поиска лучшего хода с минимаксной стратегией
  const handleStart = () => {
    setField(Array(9).fill(null));
    setXIsNext(true);
    setIsStart(true);
    indexArray = index.slice();
    setPreviousSteps([]);
  };

  const StartNewGame: React.FC = () => {
    return (
      <StyledButton
        onClick={() => {
          myAudio.play();
          handleStart();
          handleRobot(field);
        }}>
        Start New Game
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
        if (xIsNext) {
          setO((prevState: number) => prevState + 1);
          localStorage.setItem(
            "o",
            JSON.parse(localStorage.getItem("x") || "0") + 1
          );
        } else {
          setX((prevState: number) => prevState + 1);
          localStorage.setItem(
            "x",
            JSON.parse(localStorage.getItem("o") || "0") + 1
          );
        }
      }, 300);
    }
    if (indexArray.length === 0) {
      handleStart();
      setTimeout(() => {
        setModalProps(undefined);
        setDraws((prevState: number) => prevState + 1);
        localStorage.setItem(
          "draws",
          JSON.parse(localStorage.getItem("draws") || "0") + 1
        );
      }, 300);
    }
  }, [xIsNext, winner]);
  return (
    <>
      <StyledButton
        onClick={() => {
          myAudio.pause();
        }}>
        Отключить эту прекрасную музыку
      </StyledButton>
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
      {isStart ? (
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
      ) : (
        <StyledField>
          {Array(9)
            .fill("")
            .map((elem, i) => (
              <Cell
                key={i}
                value={elem}
                onClick={() => console.log("Start the game!")}
                isDisabled={true}
              />
            ))}
        </StyledField>
      )}
      <StyledSelect
        value={selectedMode}
        onChange={e => {
          setSelectedMode(e.target.value);
        }}>
        <option value="standart">Игра вдвоём</option>
        <option value="simple-bot">Робот (Уровень: Простой)</option>
        <option value="hard-bot">Робот (Уровень: Сложный)</option>
      </StyledSelect>
      <StartNewGame />
    </>
  );
};

export default Field;
