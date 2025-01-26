import type { TableProps } from "antd";
import { Button, Select, Table, Tag } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { Pagination } from "./pagination";
import { Search } from "./search";
import { tableData } from "./dummy-data";

type Status = "follow-up" | "new" | "free";

export interface DataType {
  serialNumber: number;
  UHID: string;
  patientName: string;
  ageAndGender: string;
  billingDateTime: string;
  department: string;
  doctorName: string;
  queueNumber: number;
  previousRecord: string;
  status: Status;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "S.No",
    dataIndex: "serialNumber",
    key: "serialNumber",
  },
  {
    title: "UHID",
    dataIndex: "UHID",
    key: "UHID",
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    key: "patientName",
  },
  {
    title: "Age/Gender",
    dataIndex: "ageAndGender",
    key: "ageAndGender",
  },
  {
    title: "Billing Date & Time",
    dataIndex: "billingDateTime",
    key: "billingDateTime",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Doctor Name",
    dataIndex: "doctorName",
    key: "doctorName",
  },
  {
    title: "Queue No.",
    dataIndex: "queueNumber",
    key: "queueNumber",
  },
  {
    title: "Previous Rec.",
    dataIndex: "previousRecord",
    key: "previousRecord",
    render: (_, { previousRecord }) => (
      <Select
        defaultValue={previousRecord}
        options={[
          { value: previousRecord, label: <span>{previousRecord}</span> },
        ]}
      />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      const statusOptions = {
        new: { label: "New", color: "orange" },
        "follow-up": { label: "Follow Up", color: "blue" },
        free: { label: "Free", color: "green" },
      }[status];
      return (
        <Tag
          color={statusOptions.color}
          bordered={false}
          style={{
            padding: "0.25rem 1rem",
            borderRadius: "1rem",
            fontWeight: "bold",
          }}
        >
          {statusOptions.label}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button
        icon={<EyeFilled style={{ color: "grey" }} />}
        onClick={() => console.log(record.serialNumber)}
      />
    ),
  },
];

export function PatientTable() {
  return (
    <>
      <Search />
      <Table<DataType>
        columns={columns}
        rowKey={(record) => record.serialNumber}
        dataSource={tableData}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
      <Pagination />
    </>
  );
}
