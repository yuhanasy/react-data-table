import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 280px;
  padding: 4px 8px;
  margin-right: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const FilterText = styled.p`
  margin: 0;
  padding-left: 8px;
  color: black;
`;

export const List = styled.form`
  min-width: 200px;
  display: grid;
  grid-template-rows: 1fr;
`;

export const ListOption = styled.label`
  margin-bottom: 10px;
`;

export const Value = styled.div`
  padding-left: 10px;
  display: grid;
  grid-template-rows: 1fr;
`;

export const ValueOption = styled.li``;

export const InputValue = styled.input`
  width: 70%;
  padding: 4px 20px;
  border: none;
  border-radius: 100px;
  background-color: #f8f9ff;
  outline: none;
  font-family: inherit;
  font-size: 12px;
  color: inherit;
`;

export const SubmitBtn = styled.input.attrs({ type: "submit" })`
  padding: 8px 16px;
  background-color: #8760ff;
  color: #f8f9ff;
  border: none;
  border-radius: 2px;
  margin: 4px 10px;
`;

export const ResetBtn = styled.input.attrs({ type: "button" })`
  padding: 8px 16px;
  background-color: #f8f9ff;
  color: #8760ff;
  border: 2px solid #8760ff;
  border-radius: 2px;
  margin: 4px 10px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #8760ff;
`;

export const Separator = styled.hr`
  border-right: 1px solid #8760ff;
  height: 16px;
  margin: 0 8px 0 0;
`;
