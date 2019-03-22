import React from "react";

import { SearchBar } from "./styles";

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
      <div>
        <span>O</span>
        <SearchBar
          placeholder="Quick Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
