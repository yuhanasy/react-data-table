import React from "react";

import Modal from "../../Shared/Modal";
import {
  List,
  ListOption,
  Value,
  Divider,
  InputValue,
  SubmitBtn,
  ResetBtn
} from "./styles";

import { matcher } from "../../utils/helpers";

class Filter extends React.Component {
  state = {
    isShowing: false,
    filterFunc: {},
    filterBy: {}
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

  handleChange = event => {
    const { filterFunc, filterBy } = this.state;
    const value = event.target.value.toLowerCase();
    const id = event.target.id;
    let copyFilterFunc = { ...filterFunc };
    let copyFilterBy = { ...filterBy };

    if (copyFilterFunc.hasOwnProperty(id) && copyFilterBy.hasOwnProperty(id)) {
      copyFilterFunc[id] = d => matcher(d, id, value);
      copyFilterBy[id] = value;
    }

    copyFilterFunc = {
      ...copyFilterFunc,
      [id]: d => matcher(d, id, value)
    };

    copyFilterBy = {
      ...copyFilterBy,
      [id]: value
    };

    this.setState({ filterFunc: copyFilterFunc, filterBy: copyFilterBy });
  };

  handleSubmitFilter = event => {
    event.preventDefault();
    const { filterFunc } = this.state;
    this.props.onFilter(filterFunc);
  };

  handleReset = () => {
    const filterFunc = {};
    const filterBy = {};
    this.setState({ filterFunc, filterBy });

    this.props.onFilter(filterFunc);
  };

  renderOptions = filters =>
    filters.map(el => {
      return (
        <ListOption key={el.value} name={el.value}>
          {el.label}
          <Value>
            <InputValue
              value={
                this.state.filterBy[el.value]
                  ? this.state.filterBy[el.value]
                  : ""
              }
              id={el.value}
              onChange={this.handleChange}
            />
          </Value>
          <Divider />
        </ListOption>
      );
    });

  render() {
    const { isShowing } = this.state;
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.openModalHandler}>Filter</button>
        <Modal
          show={isShowing}
          close={this.closeModalHandler}
          header="Filter Options"
        >
          <List onSubmit={this.handleSubmitFilter}>
            {this.renderOptions(options)}
            <SubmitBtn value="Apply Filter" />
            <ResetBtn value="Reset" onClick={this.handleReset} />
          </List>
        </Modal>
      </div>
    );
  }
}

export default Filter;
