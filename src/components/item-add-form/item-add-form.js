import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="ant-form ant-form-inline item-add-form" onSubmit={this.onSubmit}>
        <div className="ant-row ant-form-item item-add-input">
          <div className="ant-col ant-form-item-control ">
            <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
                <input
                  placeholder="What needs to bo done"
                  type="text"
                  className="ant-input ant-input-lg"
                  onChange={this.onLabelChange}
                  value={this.state.label}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ant-row ant-form-item item-add-button">
          <div className="ant-col ant-form-item-control ">
            <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
                <button className="ant-btn ant-btn-primary ant-btn-lg">Add Item</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
