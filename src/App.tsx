import {
  EyeInvisibleOutlined,
  FileExcelOutlined,
  FilterOutlined,
  HomeOutlined,
  UndoOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  DatePicker,
  Select,
  Space,
  TimeRangePickerProps,
} from "antd";
import UserTable from "./table";

const breadCrumbItems = [
  {
    href: "",
    title: <HomeOutlined />,
  },
  {
    href: "",
    title: <span>Clinical Management</span>,
  },
  {
    href: "",
    title: <span>OPD</span>,
  },
  {
    title: "New Patients",
  },
];

const doctorSelectOptions = [
  {
    value: "Dr. Jane Doe",
    label: <span>Dr. Jane Doe</span>,
  },
  {
    value: "Dr. Alex Smith",
    label: <span>Dr. Alex Smith</span>,
  },
  {
    value: "Dr. Emily Davis",
    label: <span>Dr. Emily Davis</span>,
  },
];

const { RangePicker } = DatePicker;

function App() {
  const handleChange: TimeRangePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleSelectDoctor = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="container py-2.5">
      <Breadcrumb separator=">" items={breadCrumbItems} />
      <div className="flex flex-col sm:flex-row justify-between items-center py-3">
        <div className="flex items-center gap-2">
          <h3 className="text-gray-700 font-bold">OPD Department</h3>
          <Button icon={<FilterOutlined />}>Filter</Button>
          <Button icon={<UndoOutlined />} />
        </div>
        <div className="flex items-center gap-2">
          <Button icon={<EyeInvisibleOutlined />}>Hide Filter</Button>
          <Button icon={<FileExcelOutlined />}>Download Excel</Button>
        </div>
      </div>
      <p className="text-gray-500 text-sm font-bold">Filter</p>
      <Space>
        <div className="">
          <p className="text-gray-700 text-sm font-bold">Period</p>
          <RangePicker onChange={handleChange} />
        </div>
        <div className="">
          <p className="text-gray-700 text-sm font-bold">Filter via Doctor</p>
          <Select
            placeholder="Select Doctor Name"
            options={doctorSelectOptions}
            onChange={handleSelectDoctor}
          />
        </div>
      </Space>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card>
          <div className="flex justify-between w-full">
            <div className="">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
            <div className="ml-auto">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between w-full">
            <div className="">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
            <div className="ml-auto">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between w-full">
            <div className="">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
            <div className="ml-auto">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between w-full">
            <div className="">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
            <div className="ml-auto">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between w-full">
            <div className="">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
            <div className="ml-auto">
              <p>New Patients</p>
              <p>
                <UserOutlined /> 20
              </p>
            </div>
          </div>
        </Card>
      </div>
      <UserTable />
    </section>
  );
}

export default App;
