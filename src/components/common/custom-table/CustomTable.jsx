import React from "react";
import { Table, Button } from "antd";
import "./CustomTable.scss";

const CustomTable = ({ columns, dataSource, loading }) => {
  return (
    <div className="custom-table-container">
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={(record) => record.id || record.key}
        pagination={false}
        footer={() => (
          <div className="see-more-container">
            <Button type="primary" className="see-more-button">
              See More
            </Button>
          </div>
        )}
      />
    </div>
  );
};

export default CustomTable;
