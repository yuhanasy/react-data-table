import React from "react";

import {
  ModalWrapper,
  BackDrop,
  ModalContainer,
  ModalHeader,
  ContentWrapper
} from "./styles";

const Modal = props => {
  return (
    <ModalWrapper>
      <BackDrop show={props.show} onClick={props.close} />
      <ModalContainer show={props.show}>
        <ModalHeader>{props.header}</ModalHeader>
        <ContentWrapper>{props.children}</ContentWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
