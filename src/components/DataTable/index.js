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
import { dynamicSort, quickSearch } from "../../utils/helpers";

class DataTable extends React.Component {
  state = {
    currentRows: [],
    sortBy: "Click on Column",
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

  handleClickColumn = event => {
    const value = event.target.id;
    let copyData = [...this.props.data];
    let { ascending } = this.state;
    const { header } = this.props;

    // Convert invoice date payment date and payment date data into date type
    for (let d of copyData) {
      let invoice = d.invoiceDate.split("-");
      let invoiceDateFormat = new Date(invoice[2], invoice[1], invoice[0]);
      d.invoiceDate = invoiceDateFormat;

      if (d.paymentDate !== null) {
        let payment = d.paymentDate.split("-");
        let paymentDateFormat = new Date(payment[2], payment[1], payment[0]);
        d.paymentDate = paymentDateFormat;
      }
    }

    const sortBy = header
      .filter(col => col.value.match(value))
      .map(col => col.label);

    ascending = ascending ? false : true;
    let sortedData = copyData.sort(dynamicSort(value, ascending));

    // Convert back invoice and payment date into string
    for (let d of sortedData) {
      let invoiceDay = d.invoiceDate.getDate();
      let invoiceMonth = d.invoiceDate.getMonth();
      let invoiceYear = d.invoiceDate.getFullYear();
      let invoice = `${invoiceDay}-${invoiceMonth}-${invoiceYear}`;
      d.invoiceDate = invoice;

      if (d.paymentDate !== null) {
        let paymentDay = d.paymentDate.getDate();
        let paymentMonth = d.paymentDate.getMonth();
        let paymentYear = d.paymentDate.getFullYear();
        let payment = `${paymentDay}-${paymentMonth}-${paymentYear}`;
        d.paymentDate = payment;
      }
    }

    this.setState({ sortBy, data: sortedData, ascending });
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
        {cols.map(col => (
          <Col key={col.value}>
            {row[col.value] !== null ? row[col.value] : "-"}
          </Col>
        ))}
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
          <Sort column={sortBy} order={ascending} />
          <Filter options={header} data={data} onFilter={this.handleFilter} />
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
          <TableBody>{this.renderData(currentRows, header)}</TableBody>
        </Table>
        <Pagination data={data} onChangePage={this.handleChangePage} />
      </TableContainer>
    );
  }
}

export default DataTable;
