import React from "react";

import Pagination from "../Pagination";
import Search from "../Search";
import { Table, TableHead, Head, TableBody, Row, Col, Options } from "./styles";

const renderData = (data, cols) =>
  data.map(row => (
    <Row key={row.id}>
      {cols.map(col => (
        <Col key={col.value}>
          {row[col.value] !== null ? row[col.value] : "-"}
        </Col>
      ))}
    </Row>
  ));

class DataTable extends React.Component {
  state = {
    currentRows: [],
    sortBy: "",
    data: [],
    value: ""
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  handleChangePage = currentRows => {
    this.setState({
      currentRows
    });
  };

  dynamicSort = property => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  handleClickColumn = event => {
    const sortBy = event.target.id;
    const copyData = [...this.props.data];

    this.setState({ sortBy });
    const newData = copyData.sort(this.dynamicSort(sortBy));
    this.setState({ data: newData });
  };

  handleSearch = value => {
    this.setState({ value });
    // let copyData = [...this.props.data];

    // if (value.length > 0) {
    //   copyData = copyData.filter(item => item.id.match(value));
    // }
    // console.log(copyData);
    // // this.setState({ data: copyData });
  };

  render() {
    let { currentRows, data, value } = this.state;
    const { header } = this.props;

    if (value.length > 0) {
      data = data.filter(item => item.id.match(value));
    }

    return (
      <div>
        {data.length && (
          <div>
            <Options>
              <Search onSearch={this.handleSearch} />
            </Options>
            <Table>
              <TableHead>
                <Row>
                  {header.map(col => (
                    <Head
                      key={col.value}
                      id={col.value}
                      onClick={this.handleClickColumn}
                    >
                      {col.label}
                    </Head>
                  ))}
                </Row>
              </TableHead>
              <TableBody>{renderData(currentRows, header)}</TableBody>
            </Table>
            <Pagination data={data} onChangePage={this.handleChangePage} />
          </div>
        )}
      </div>
    );
  }
}

export default DataTable;
