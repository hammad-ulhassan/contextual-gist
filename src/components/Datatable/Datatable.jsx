import { Table, Tag } from "antd";
import GistMeta from "../GistMeta/GistMeta";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Datatable.css';
import { usePublicGists } from "../../hooks/usePublicGistsContext";

function Datatable({ data, selectedRowKeys, loading, onPageChange }) {

  let navigate = useNavigate();
  let {setSelectedGist} = usePublicGists();


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      render: (text, record, index) => (
        <GistMeta isInTable={true} gist={record.gist} />
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "12%",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "8%",
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "keyword",
      width: "16%",
      render: (text, record, index) => text && text.slice(0, 25) + "...",
    },
    {
      title: "Notebook Name",
      dataIndex: "notebook",
      key: "notebook",
      width: "32%",
      render: (text, record, index) =>
        record.notebook.map((file, index) =>
          index < 5 ? <Tag key={index}>{file}</Tag> : null
        ),
    },
    {
      title: "",
      dataIndex: "actions",
      key: "actions",
      width: "8%",
      render: (text, record, index) => {

      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ y: 600 }}
      loading={loading}
      pageSize={10}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        total: 1000,
        onChange: (page, pageSize)=>onPageChange(page, pageSize),
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            setSelectedGist(record.gist);

            navigate(`/gist/${record.gist.id}`);
          },
        };
      }}
    />
  );
}

export default React.memo(Datatable)
