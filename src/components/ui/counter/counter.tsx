import React from "react";

interface IProps {
  [key: string]: number;
}

const Counter: React.FC<IProps> = ({ x, o, draws }) => {
  return (
    <div>
      <p>
        Побед у X: <span>{x}</span>
      </p>
      <p>
        Побед у O: <span>{o}</span>
      </p>
      <p>
        Ничей: <span>{draws}</span>
      </p>
    </div>
  );
};

export default Counter;
