import React, { Component } from "react";

import DataTable from "./components/DataTable";
// import { GlobalStyle } from "./GlobalStyle";
import mockData from "./utils/data/mockData.json";

const header = [
  { value: "invoiceDate", label: "Invoice Date" },
  { value: "id", label: "Invoice/Receipt ID" },
  { value: "total", label: "Transaction Amount" },
  { value: "paid", label: "Status" },
  { value: "method", label: "Payment Method" },
  { value: "paymentDate", label: "Payment Date" }
];

class App extends Component {
  render() {
    const { data } = mockData;
    return (
      <React.Fragment>
        {/* <GlobalStyle /> */}
        <DataTable header={header} data={data} />
      </React.Fragment>
    );
  }
}

export default App;
