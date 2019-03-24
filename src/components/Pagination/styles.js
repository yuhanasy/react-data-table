import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageWrapper = styled.ul`
  display: inline-block;
  margin: 0;
`;

export const Page = styled.li`
  display: inline-block;
  margin: 0 8px;
  color: ${props => (props.fontColor ? "black" : "inherit")};
  cursor: pointer;
`;

export const PageButton = styled.span`
  margin: 0 8px;
  color: black;
  cursor: pointer;
`;

export const TableInfo = styled.span`
  margin: 0 8px;
  color: ${props => props.fontColor || "inherit"};

  cursor: pointer;
`;
