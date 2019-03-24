import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 4px 8px;
  border-radius: 100px;
  margin-right: 32px;
  background-color: #eee8ff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
    color: #93919a;
  }
`;

export const SearchIcon = styled.i``;
