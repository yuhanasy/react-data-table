import React from "react";

import Pagination from "../Pagination";
import { Table, TableHead, Head, TableBody, Row, Col } from "./styles";

const renderData = (data, cols) =>
  data.map(row => (
    <Row key={row.id}>
      {cols.map(col => (
        <Col key={col.value}>{row[col.value]}</Col>
      ))}
    </Row>
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
        <Table>
          <TableHead>
            <Row>
              {header.map(col => (
                <Head key={col.value}>{col.label}</Head>
              ))}
            </Row>
          </TableHead>
          <TableBody>{renderData(currentRows, header)}</TableBody>
        </Table>
        <Pagination data={data} onChangePage={this.handleChangePage} />
      </div>
    );
  }
}

export default DataTable;
