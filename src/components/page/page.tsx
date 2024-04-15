import Field from "../ui/field/field";
import { StyledPage } from "./style";
import Header from "../ui/header/header";
import Tutorial from "../ui/tutorial/tutorial";
import Counter from "../ui/counter/counter";
import React from "react";
import { AppRoute } from "../../const";
import { useState } from "react";

interface Props {
  router: string;
}

const Page: React.FC<Props> = ({ router }) => {
  const [countOfWinX, setCountOfWinX] = useState<number>(
    JSON.parse(localStorage.getItem("x") || "0")
  );
  const [countOfWinO, setCountOfWinO] = useState<number>(
    JSON.parse(localStorage.getItem("o") || "0")
  );
  const [countOfDraws, setCountOfDraws] = useState<number>(
    JSON.parse(localStorage.getItem("draws") || "0")
  );
  return (
    <>
      <StyledPage>
        <Header />
        {AppRoute.GAME === router && (
          <Field
            setX={setCountOfWinX}
            setO={setCountOfWinO}
            setDraws={setCountOfDraws}
          />
        )}
        {AppRoute.TUTORIAL === router && <Tutorial />}
        {AppRoute.COUNTER === router && (
          <Counter x={countOfWinX} o={countOfWinO} draws={countOfDraws} />
        )}
      </StyledPage>
    </>
  );
};

export default Page;
