import React from "react";
import { StyledBox, StyledDiv } from "./style";

const Tutorial: React.FC = () => {
  return (
    <StyledBox>
      <h2 style={{ marginBottom: "20px" }}>
        Туториал 1: правила игры в крестики-нолики
      </h2>
      <StyledDiv>
        <iframe
          height="800"
          src="https://www.youtube.com/embed/OFauCy1Pqls?si=OULqkRT77XOBTeb5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </StyledDiv>
      <h2 style={{ marginBottom: "20px" }}>
        Туториал 2: Как всегда выигрывать в крестики-нолики
      </h2>
      <StyledDiv>
        <iframe
          height="800"
          src="https://www.youtube.com/embed/_ZprsNVaffA?si=EuaV-sJqb0Y6POAN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </StyledDiv>
      <h2 style={{ marginBottom: "20px" }}>
        На этом всё, ждите новые туториалы!...
      </h2>
    </StyledBox>
  );
};

export default Tutorial;
