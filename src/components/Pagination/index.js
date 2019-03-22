import React from "react";

class Pagination extends React.Component {
  state = {
    currentPage: 1,
    rowPerPage: 8
  };

  componentDidMount() {
    const { currentPage, rowPerPage } = this.state;
    const { data } = this.props;

    const lastRow = currentPage * rowPerPage;
    const firstRow = lastRow - rowPerPage;
    const currentRows = data.slice(firstRow, lastRow);

    this.props.onChangePage(currentRows);
  }

  handleClick = event => {
    const currentPage = Number(event.target.id);
    const { rowPerPage } = this.state;
    const { data } = this.props;

    const lastRow = currentPage * rowPerPage;
    const firstRow = lastRow - rowPerPage;
    const currentRows = data.slice(firstRow, lastRow);

    this.props.onChangePage(currentRows);
    this.setState({ currentPage });
  };

  render() {
    const { rowPerPage } = this.state;
    const { data } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / rowPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return <div>{renderPageNumbers}</div>;
  }
}

export default Pagination;
