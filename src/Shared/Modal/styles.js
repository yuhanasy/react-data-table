import styled from "styled-components";

export const BackDrop = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: ${props => (props.show ? "block" : "none")};
`;

export const ModalContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  border-radius: 4px;
  background-color: #eee8ff;
  opacity: ${props => (props.show ? 1 : 0)};
  transform: ${props =>
    props.show ? "translateX(-400px)" : "translateX(400px)"};
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 0;
  right: -400px;
  z-index: 1;
`;

export const ModalHeader = styled.h3``;

export const ModalWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto);
  grid-column-gap: 20px;
`;
