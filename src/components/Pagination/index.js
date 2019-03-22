import React from "react";

import { PaginationWrapper, PageWrapper, Page, PageButton } from "./styles";

class Pagination extends React.Component {
  state = {
    currentPage: 1,
    rowPerPage: 8
  };

  calcCurrentRows = (currentPage, rowPerPage = 8) => {
    const { data } = this.props;

    const lastRow = currentPage * rowPerPage;
    const firstRow = lastRow - rowPerPage;
    const currentRows = data.slice(firstRow, lastRow);

    this.props.onChangePage(currentRows);
    this.setState({ firstRow, lastRow });
  };

  componentDidMount() {
    const { currentPage, rowPerPage } = this.state;
    const { data } = this.props;

    const totalPage = Math.ceil(data.length / rowPerPage);
    this.calcCurrentRows(currentPage, rowPerPage);
    this.setState({ totalPage });
  }

  handleClick = event => {
    const currentPage = Number(event.target.id);
    const { rowPerPage } = this.state;

    this.calcCurrentRows(currentPage, rowPerPage);
    this.setState({ currentPage });
  };

  handleNext = () => {
    let { currentPage, totalPage } = this.state;
    if (currentPage < totalPage) {
      currentPage += 1;
      this.calcCurrentRows(currentPage);
      this.setState({ currentPage });
    }
  };

  handlePrevious = () => {
    let { currentPage } = this.state;
    if (currentPage > 1) {
      currentPage -= 1;
      this.calcCurrentRows(currentPage);
      this.setState({ currentPage });
    }
  };

  handleFirst = () => {
    this.calcCurrentRows(1);
    this.setState({
      currentPage: 1
    });
  };

  handleLast = () => {
    const { totalPage } = this.state;
    this.calcCurrentRows(totalPage);
    this.setState({
      currentPage: totalPage
    });
  };

  render() {
    const { firstRow, lastRow, totalPage } = this.state;
    const { data } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Page key={number} id={number} onClick={this.handleClick}>
          {number}
        </Page>
      );
    });

    return (
      <PaginationWrapper>
        <div>{`Show ${firstRow} - ${lastRow} from ${data.length}`}</div>
        <div>
          <PageButton>Page</PageButton>
          <PageButton onClick={this.handleFirst}>&lt;&lt;</PageButton>
          <PageButton onClick={this.handlePrevious}>&lt;</PageButton>
          <PageWrapper>{renderPageNumbers}</PageWrapper>
          <PageButton onClick={this.handleNext}>&gt;</PageButton>
          <PageButton onClick={this.handleLast}>&gt;&gt;</PageButton>
        </div>
      </PaginationWrapper>
    );
  }
}

export default Pagination;
