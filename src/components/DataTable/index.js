import React from "react";

import Pagination from "../Pagination";
import Search from "../Search";
import Sort from "../Sort";
import Filter from "../Filter";
import {
  Table,
  TableHead,
  Head,
  TableBody,
  Row,
  Col,
  Options,
  TableContainer,
  TableInfo
} from "./styles";
import {
  dynamicSort,
  quickSearch,
  strToDate,
  dateToStr,
  formatCurrency
} from "../../utils/helpers";

class DataTable extends React.Component {
  state = {
    currentRows: [],
    sortBy: "invoiceDate",
    ascending: true,
    data: [],
    input: ""
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

  handleSort = event => {
    const value = event ? event.target.id : this.state.sortBy;
    let copyData = [...this.props.data];
    let { ascending } = this.state;

    // Convert invoice date payment date and payment date data into date type
    for (let d of copyData) {
      d.invoiceDate = strToDate(d.invoiceDate);

      if (d.paymentDate !== null) {
        d.paymentDate = strToDate(d.paymentDate);
      }
    }

    ascending = ascending ? false : true;
    let sortedData = copyData.sort(dynamicSort(value, ascending));

    // Convert back invoice and payment date into string
    for (let d of sortedData) {
      d.invoiceDate = dateToStr(d.invoiceDate);

      if (d.paymentDate !== null) {
        d.paymentDate = dateToStr(d.paymentDate);
      }
    }

    this.setState({ sortBy: value, data: sortedData, ascending });
  };

  handleSearch = input => {
    this.setState({ input });
  };

  handleFilter = filter => {
    let { data } = this.props;

    const filterCombiner = (d, filterArray) => {
      for (let fn in filterArray) {
        if (!filterArray[fn](d)) {
          return false;
        }
      }
      return true;
    };

    const result = data.filter(d => filterCombiner(d, filter));

    this.setState({ data: result });
  };

  renderData = (data, cols) =>
    data.map(row => (
      <Row key={row.id}>
        {cols.map(col => {
          let value =
            col.value === "total"
              ? formatCurrency.format(row.total)
              : row[col.value];
          return (
            <Col id={col.value} key={col.value} onClick={this.handleSort}>
              {value !== null ? value : "-"}
            </Col>
          );
        })}
      </Row>
    ));

  render() {
    let { currentRows, data, input, sortBy, ascending } = this.state;
    const { header } = this.props;

    data = quickSearch(input, data);

    return (
      <TableContainer>
        <TableInfo>
          Listed below are the successful payment transactions
        </TableInfo>
        <Options>
          <Search onSearch={this.handleSearch} />
          <Sort
            sortBy={sortBy}
            order={ascending}
            handleSort={this.handleSort}
            header={header}
          />
          <Filter options={header} data={data} onFilter={this.handleFilter} />
        </Options>
        <Table>
          <TableHead>
            <Row>
              {header.map(col => (
                <Head key={col.value} id={col.value} onClick={this.handleSort}>
                  {col.label}
                </Head>
              ))}
            </Row>
          </TableHead>
          <TableBody>{this.renderData(currentRows, header)}</TableBody>
        </Table>
        <Pagination data={data} onChangePage={this.handleChangePage} />
      </TableContainer>
    );
  }
}

export default DataTable;
