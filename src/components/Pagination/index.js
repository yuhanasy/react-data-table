import React from "react";

import {
  PaginationWrapper,
  PageWrapper,
  Page,
  PageButton,
  TableInfo
} from "./styles";

class Pagination extends React.Component {
  state = {
    currentPage: 1,
    rowPerPage: 8,
    data: [],
    totalPage: 0,
    firstRow: 0,
    lastRow: 0
  };

  componentDidMount() {
    const { currentPage, rowPerPage } = this.state;
    const { data } = this.props;
    const totalPage = Math.ceil(data.length / rowPerPage);
    this.calcCurrentRows(currentPage, rowPerPage);
    this.setState({ data, totalPage });
  }

  componentDidUpdate(prevProps) {
    const { currentPage, rowPerPage } = this.state;
    const { data } = this.props;
    const totalPage = Math.ceil(data.length / rowPerPage);
    if (JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) {
      this.calcCurrentRows(currentPage, rowPerPage);
      this.setState({ data, totalPage });
    }
  }

  calcCurrentRows = (currentPage, rowPerPage = 8) => {
    const { data } = this.props;

    const lastRow = currentPage * rowPerPage;
    const firstRow = lastRow - rowPerPage;
    const currentRows = data.slice(firstRow, lastRow);
    this.props.onChangePage(currentRows);
    this.setState({ firstRow, lastRow });
  };

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

  renderPageNumbers = () => {
    const { currentPage, totalPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => {
      const color = currentPage === number ? true : false;
      return (
        <Page
          key={number}
          id={number}
          onClick={this.handleClick}
          fontColor={color}
        >
          {number}
        </Page>
      );
    });
  };

  render() {
    let { firstRow, lastRow } = this.state;
    const { data } = this.props;

    firstRow += 1;
    lastRow = lastRow > data.length ? data.length : lastRow;

    return (
      <div>
        {data.length ? (
          <PaginationWrapper>
            <div>
              <TableInfo>Show</TableInfo>
              <TableInfo fontColor="black">{`${firstRow} - ${lastRow}`}</TableInfo>
              <TableInfo>from</TableInfo>
              <TableInfo fontColor="black">{`${data.length}`}</TableInfo>
            </div>
            <div>
              <PageButton>Page</PageButton>
              <PageButton onClick={this.handleFirst}>&lt;&lt;</PageButton>
              <PageButton onClick={this.handlePrevious}>&lt;</PageButton>
              <PageWrapper>{this.renderPageNumbers()}</PageWrapper>
              <PageButton onClick={this.handleNext}>&gt;</PageButton>
              <PageButton onClick={this.handleLast}>&gt;&gt;</PageButton>
            </div>
          </PaginationWrapper>
        ) : (
          <PaginationWrapper>
            <TableInfo>No Data Found</TableInfo>
          </PaginationWrapper>
        )}
      </div>
    );
  }
}

export default Pagination;
