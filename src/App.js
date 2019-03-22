import React, { Component } from "react";
import "./App.css";

import DataTable from "./components/DataTable";

import mockData from "./services/data/mockData.json";

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
      <div className="App">
        <DataTable header={header} data={data} />
      </div>
    );
  }
}

export default App;
