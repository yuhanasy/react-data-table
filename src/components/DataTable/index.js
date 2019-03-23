import React from "react";

import Pagination from "../Pagination";
import Search from "../Search";
import Sort from "../Sort";
import Modal from "../../Shared/Modal";
import { Table, TableHead, Head, TableBody, Row, Col, Options } from "./styles";
import { dynamicSort, quickSearch } from "../../services/helpers";

// const renderData = (data, cols) =>
//   data.map(row => (
//     <Row key={row.id}>
//       {cols.map(col => (
//         <Col key={col.value}>
//           {row[col.value] !== null ? row[col.value] : "-"}
//         </Col>
//       ))}
//     </Row>
//   ));

class DataTable extends React.Component {
  state = {
    currentRows: [],
    sortBy: "",
    data: [],
    input: "",
    isShowing: false
  };

  // setDataValue = () => {
  //   const {data}
  // }

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
    const { header } = this.props;
    const copyData = [...this.props.data];

    const sortBy = header.map(col =>
      col.value.match(value) ? col.label : null
    );

    this.setState({ sortBy });
    const newData = copyData.sort(dynamicSort(value));
    this.setState({ data: newData });
  };

  handleSearch = input => {
    this.setState({ input });
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
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
    let { currentRows, data, input, sortBy } = this.state;
    const { header } = this.props;

    data = quickSearch(input, data);

    return (
      <div>
        <div>
          <Options>
            <Search onSearch={this.handleSearch} />
            <Sort column={sortBy} />
            <button onClick={this.openModalHandler}>Filter</button>
          </Options>
          <Modal
            show={this.state.isShowing}
            close={this.closeModalHandler}
            header="Filter Options"
            options={header}
            data={data}
          />
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
        </div>
      </div>
    );
  }
}

export default DataTable;
