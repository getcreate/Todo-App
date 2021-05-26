import React from "react";

import './app-header.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <div className="app-header__title">
        <span class="ant-page-header-heading-sub-title" title="Version 1.0.0">Version 1.0.0</span>
        <span class="ant-page-header-heading-title" title="My Todo List">My Todo List</span>
      </div>
      <div className="app-header__statistic">
        <div className="ant-col ant-statistic statistic">
          <div className="ant-statistic-title">Active</div>
          <div className="ant-statistic-content">
            <span className="ant-statistic-content-value">
              <span className="ant-statistic-content-value-int">{toDo}</span>
            </span>
          </div>
        </div>

        <div className="ant-col ant-statistic statistic">
          <div className="ant-statistic-title">Done</div>
          <div className="ant-statistic-content">
            <span className="ant-statistic-content-value">
              <span className="ant-statistic-content-value-int">{done}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
