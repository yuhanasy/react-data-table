import React from "react";

class Sort extends React.Component {
  render() {
    return (
      <div>
        Sort by <span>{this.props.column}</span>
      </div>
    );
  }
}

export default Sort;
