import React from "react";

import { SortContainer, SortText, SortOption } from "./styles";
import "boxicons";

class Sort extends React.Component {
  handleClick = event => {
    this.props.handleSort();
  };

  getSortBY = () => {
    const { sortBy, header } = this.props;
    return header.filter(col => col.value === sortBy).map(col => col.label);
  };

  render() {
    const { sortBy, order } = this.props;
    const upOrDown = order ? "90" : "270";

    return (
      <SortContainer id={sortBy} onClick={this.handleClick}>
        <box-icon name="menu-alt-left" size="md" />
        <SortText>Sort by</SortText>
        <SortOption>{this.getSortBY()}</SortOption>
        <box-icon
          name="arrow-back"
          rotate={upOrDown}
          size="sm"
          color="#8760ff"
        />
      </SortContainer>
    );
  }
}

export default Sort;
