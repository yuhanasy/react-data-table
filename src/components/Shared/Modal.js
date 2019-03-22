import styled from "styled-components";

export const Modal = styled.div`
  max-width: 400px;
  padding: 10px;
  border-radius: 4px;
  background-color: #eee8ff;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
`;

export const ListOption = styled.li``;

export const Value = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
`;

export const OptionValue = styled.li``;
