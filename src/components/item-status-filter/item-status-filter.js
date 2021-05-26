import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      return (
        <label
          className={
            isActive ? "ant-radio-button-wrapper ant-radio-button-wrapper-checked" : "ant-radio-button-wrapper"
          }
          key={name}
          onChange={() =>onFilterChange(name)}
        >
          <span className={isActive ? "ant-radio-button ant-radio-button-checked" : "ant-radio-button"}>
            <input
              type="radio"
              className="ant-radio-button-input"
              value={label}
              name="filter-todo"
              сhecked={isActive.toString()}
            />
            <span className="ant-radio-button-inner"></span>
          </span>
          <span>{label}</span>
        </label>
      );
    });

    return <div className="ant-radio-group ant-radio-group-solid">{buttons}</div>;
  }
}
