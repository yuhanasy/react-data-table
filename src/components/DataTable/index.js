import React from "react";

const renderData = (data, cols) =>
  data.map(row => (
    <tr key={row.id}>
      {cols.map(col => (
        <td key={col.value}>{row[col.value]}</td>
      ))}
    </tr>
  ));

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

class DataTable extends React.Component {
  state = {
    currentRows: []
  };

  handleChangePage = currentRows => {
    this.setState({
      currentRows
    });
  };

  render() {
    const { currentRows } = this.state;
    const { header, data } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              {header.map(col => (
                <th key={col.value}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderData(currentRows, header)}</tbody>
        </table>
        <Pagination data={data} onChangePage={this.handleChangePage} />
      </div>
    );
  }
}

export default DataTable;
