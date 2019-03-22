import React from "react";

import Pagination from "../Pagination";

const renderData = (data, cols) =>
  data.map(row => (
    <tr key={row.id}>
      {cols.map(col => (
        <td key={col.value}>{row[col.value]}</td>
      ))}
    </tr>
  ));

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
