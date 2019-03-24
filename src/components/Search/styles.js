import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 4px 8px;
  border-radius: 100px;
  margin: 8px 32px 0;
  background-color: #eee8ff;
  display: flex;
  justify-content: flex-start;
  align-self: center;
`;

export const SearchBar = styled.input`
  width: 200px;
  margin-left: 8px;
  border: none;
  outline: none;
  background-color: #eee8ff;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  ::placeholder {
    color: inherit;
  }
`;

export const SearchIcon = styled.i``;
