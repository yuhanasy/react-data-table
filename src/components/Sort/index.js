import React from "react";

import { SortContainer, SortText, SortOption } from "./styles";
import "boxicons";

const Sort = ({ column, order }) => {
  const upOrDown = order ? "90" : "270";

  return (
    <SortContainer>
      <box-icon name="menu-alt-left" size="md" />
      <SortText>Sort by</SortText>
      <SortOption>{column}</SortOption>
      <box-icon name="arrow-back" rotate={upOrDown} size="sm" color="#8760ff" />
    </SortContainer>
  );
};

export default Sort;
