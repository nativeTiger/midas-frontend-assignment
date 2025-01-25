import React from "react";
import type { GetProp, TableProps } from "antd";
import { Button, Pagination, Table, Tag } from "antd";
import { useSearchParams } from "react-router";
import { EyeFilled } from "@ant-design/icons";

type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface DataType {
  serialNumber: number;
  UHID: string;
  patientName: string;
  ageAndGender: string;
  billingDateTime: string;
  department: string;
  doctorName: string;
  queueNumber: number;
  previousRecord: string;
  status: "follow-up" | "new" | "free";
}

const data: DataType[] = [
  {
    serialNumber: 1,
    UHID: "B1000216",
    patientName: "Ramesh Koirala",
    ageAndGender: "12 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Biochemistry",
    doctorName: "Sirishak Aryal",
    queueNumber: 1,
    previousRecord: "4",
    status: "follow-up",
  },
  {
    serialNumber: 2,
    UHID: "B1000216",
    patientName: "Ramesh Koirala",
    ageAndGender: "20 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Haematology",
    doctorName: "Engineer",
    queueNumber: 2,
    previousRecord: "2",
    status: "new",
  },
  {
    serialNumber: 3,
    UHID: "B1000216",
    patientName: "John Doe",
    ageAndGender: "35 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Immunology",
    doctorName: "John Doe",
    queueNumber: 3,
    previousRecord: "4",
    status: "follow-up",
  },
  {
    serialNumber: 4,
    UHID: "B1000216",
    patientName: "Jane Smith",
    ageAndGender: "45 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Microbiology",
    doctorName: "Designer",
    queueNumber: 4,
    previousRecord: "5",
    status: "follow-up",
  },
  {
    serialNumber: 5,
    UHID: "B1000216",
    patientName: "Michael Johnson",
    ageAndGender: "27 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Genetics",
    doctorName: "Jane Smith",
    queueNumber: 5,
    previousRecord: "2",
    status: "free",
  },
  {
    serialNumber: 6,
    UHID: "B1000216",
    patientName: "Emily Davis",
    ageAndGender: "50 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Neurology",
    doctorName: "Developer",
    queueNumber: 6,
    previousRecord: "2",
    status: "new",
  },
  {
    serialNumber: 7,
    UHID: "B1000216",
    patientName: "David Brown",
    ageAndGender: "35 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Pathology",
    doctorName: "Alex Johnson",
    queueNumber: 7,
    previousRecord: "8",
    status: "free",
  },
  {
    serialNumber: 8,
    UHID: "B1000216",
    patientName: "Sarah Wilson",
    ageAndGender: "60 Yrs/F",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Pharmacology",
    doctorName: "Architect",
    queueNumber: 8,
    previousRecord: "6",
    status: "new",
  },
  {
    serialNumber: 9,
    UHID: "B1000216",
    patientName: "Chris Lee",
    ageAndGender: "42 Yrs/M",
    billingDateTime: "2081-06-13 11:09:47",
    department: "Endocrinology",
    doctorName: "Emily Brown",
    queueNumber: 9,
    previousRecord: "2",
    status: "free",
  },
];

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

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagination: TablePaginationConfig = {
    current: Number(searchParams.get("page") ?? 1),
    pageSize: Number(searchParams.get("pageSize") ?? 10),
    total: 200, // This is just a dummy value
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set("page", String(page ?? 1));
    urlParams.set("pageSize", String(pageSize ?? 10));
    setSearchParams(urlParams);
  };

  return (
    <>
      <Table<DataType>
        columns={columns}
        rowKey={(record) => record.serialNumber}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
      <Pagination
        responsive
        style={{ marginTop: "1rem" }}
        align="end"
        onChange={handlePaginationChange}
        total={pagination.total}
        showTotal={(total, range) =>
          `showing ${range[0]} to ${range[1]} of ${total} items`
        }
        defaultPageSize={pagination.pageSize}
        defaultCurrent={pagination.current}
      />
    </>
  );
};

export default App;
