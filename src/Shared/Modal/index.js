import React from "react";

import { BackDrop, ModalContainer, ModalHeader, ModalWrapper } from "./styles";

const Modal = props => {
  return (
    <div>
      <BackDrop show={props.show} onClick={props.close} />
      <ModalContainer show={props.show}>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalWrapper>{props.children}</ModalWrapper>
      </ModalContainer>
    </div>
  );
};

export default Modal;
