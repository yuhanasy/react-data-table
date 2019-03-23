import styled from "styled-components";

export const Table = styled.table`
  margin: 40px auto;
  width: 90vw;
  min-width: 600px;
  text-align: left;
  color: #8760ff;
`;

export const TableHead = styled.thead``;

export const Head = styled.th`
  border-bottom: 2px solid #ebe5ff;
  padding: 8px;
  cursor: pointer;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  :hover {
    background-color: #eee8ff;
  }
`;

export const Col = styled.td`
  border-bottom: 2px solid #ebe5ff;
  padding: 1em;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;
