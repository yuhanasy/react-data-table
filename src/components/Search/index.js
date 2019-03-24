import React from "react";

import { SearchBar, SearchContainer } from "./styles";
import "boxicons";

class Search extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const value = event.target.value.toLowerCase();
    this.setState({ value });
    this.props.onSearch(value);
  };

  render() {
    return (
      <SearchContainer>
        <box-icon name="search" size="sm" color="#93919a" />
        <SearchBar
          placeholder="Quick Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </SearchContainer>
    );
  }
}

export default Search;
