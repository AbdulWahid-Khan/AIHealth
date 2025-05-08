import React from "react";
import { Table } from "antd";
const DataTable = ({ dataSource, columns, pageSize, className,onRow }) => {
  return (
    <>
      <div
        className={`"datatable-wrapper w-full pb-3 ${className}" overflow-auto customScrollbar`}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          className="theme-table"
          pagination={
            dataSource?.length > pageSize && {
              pageSize: pageSize,
            }
          }
          onRow={onRow}
        />
      </div>
    </>
  );
};
export default DataTable;