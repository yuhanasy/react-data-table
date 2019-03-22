import React from "react";

import {
  Modal,
  ModalWrapper,
  List,
  ListOption,
  Value,
  OptionValue
} from "../Shared/Modal";

const header = [
  { value: "invoiceDate", label: "Invoice Date" },
  { value: "id", label: "Invoice/Receipt ID" },
  { value: "total", label: "Transaction Amount" },
  { value: "paid", label: "Status" },
  { value: "method", label: "Payment Method" },
  { value: "paymentDate", label: "Payment Date" }
];

const renderList = header.map(item => (
  <ListOption key={item.value} name={item.value}>
    {item.label}
  </ListOption>
));

const renderValue = header.map(item => (
  <OptionValue key={item.value}>{item.label}</OptionValue>
));

class Sort extends React.Component {
  render() {
    return (
      <Modal>
        <ModalWrapper>
          <List>{renderList}</List>
          <Value>{renderValue}</Value>
        </ModalWrapper>
      </Modal>
    );
  }
}

export default Sort;
