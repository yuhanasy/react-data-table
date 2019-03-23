import styled from "styled-components";

export const ModalWrapper = styled.div``;

export const BackDrop = styled.div`
  background-color: #8760ff;
  opacity: 0.6;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.show ? "block" : "none")};
`;

export const ModalContainer = styled.div`
  max-width: 400px;
  height: 100%;
  padding: 20px 40px;
  margin: 20px;
  border-radius: 4px;
  background-color: #eee8ff;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.5s ease-in-out;

  position: absolute;
  top: -700px;
  left: 50%;
  transform: ${props =>
    props.show ? "translate(-50%, 700px)" : "translate(-50%, -700px)"};
  z-index: 1;
`;

export const ModalHeader = styled.h3``;

export const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
`;
