import {
  EyeInvisibleOutlined,
  FileExcelOutlined,
  FilterOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import { PatientTable } from "./opd-department/table";
import { Filter } from "./opd-department/filter";
import { MetricsCard } from "./opd-department/metrics-card";
import { breadCrumbItems } from "./opd-department/dummy-data";

function App() {
  return (
    <section className="container py-2.5">
      <Breadcrumb separator=">" items={breadCrumbItems} />
      <div className="flex gap-2 flex-col sm:flex-row justify-between sm:items-center py-3">
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
      <Filter />
      <MetricsCard />
      <PatientTable />
    </section>
  );
}

export default App;
