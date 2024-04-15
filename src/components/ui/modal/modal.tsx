import React from "react";
import { ModalCardBase, Button } from "@vkontakte/vkui";

interface Props {
  xIsWinner: boolean | undefined;
  setState: (state: null | boolean | undefined) => void;
}

const Modal: React.FC<Props> = ({ xIsWinner, setState }) => {
  return (
    <>
      <ModalCardBase
        header={
          xIsWinner && xIsWinner !== undefined
            ? `X is winner`
            : !xIsWinner && xIsWinner !== undefined
            ? `O is winner`
            : `Draw`
        }
        dismissButtonMode="inside"
        style={{
          width: `450px`,
          height: `400px`,
          paddingTop: `20px`,
          position: "absolute",
        }}
        onClose={() => {
          setState(null);
        }}>
        <Button
          style={{ marginTop: `100px`, height: `50px` }}
          onClick={() => {
            setState(null);
          }}>
          Reset the Field
        </Button>
      </ModalCardBase>
    </>
  );
};

export default Modal;
