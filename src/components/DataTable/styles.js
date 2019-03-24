import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 40px;
`;

export const TableInfo = styled.h1`
  font-size: 18px;
  font-weight: normal;
  color: #93919a;
`;

export const Table = styled.table`
  width: 100%;
  margin: 20px 0 40px;
  min-width: 600px;
  text-align: left;
  color: #8760ff;
`;

export const TableHead = styled.thead``;

export const Head = styled.th`
  border-bottom: 2px solid #ebe5ff;
  padding: 8px;
  font-weight: normal;
  color: #93919a;
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
