import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/mainLayout";
import { Table } from "antd";
import { fetchData } from "../Utils/apiFunction";
import { logColumns } from "../Utils/columnAntd";

const Logs = () => {
  const [logData, setLogData] = useState([]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
  });

  const fetchDetails = async (page, limit) => {
    const payload = {
      page,
      limit,
    };
    const data = await fetchData("chart/events", payload);
    console.log(data?.data, "======<<<<<<<<<>>>>>>>>>>>-=========");
    setLogData(data?.data);
  };

  useEffect(() => {
    fetchDetails(pagination.current, pagination.pageSize);
  }, []);

  console.log("logData:", logData);

  useEffect(() => {
    if (logData?.totalCount && logData?.totalCount) {
      setPagination((prevData) => ({
        ...prevData,
        total: logData?.totalCount,
      }));
    }
  }, [logData]);

  const handleTableChange = (pagination) => {
    setPagination(pagination);
    fetchDetails(pagination.current, pagination.pageSize);
  };

  return (
    <MainLayout>
      <div className="bg-white border-10" style={{ gridColumn: "span 6" }}>
        <h1 className="padding-20 margin-h-10">Logs Table</h1>
        <Table
          pagination={pagination}
          columns={logColumns}
          onChange={handleTableChange}
          // scroll={{ y: 500 }}
          dataSource={Array.isArray(logData?.result) ? logData.result : []}
        ></Table>
      </div>
    </MainLayout>
  );
};

export default Logs;
