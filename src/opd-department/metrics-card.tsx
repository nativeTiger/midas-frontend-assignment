import { UserOutlined } from "@ant-design/icons";
import { Card, Space, Tag } from "antd";
import { patientStatusTags } from "./dummy-data";

export function MetricsCard() {
  return (
    <Space direction="vertical">
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
      <div className="">
        {patientStatusTags.map((item, index) => (
          <Tag
            key={item.label}
            color={index === 0 ? "blue-inverse" : "default"}
            bordered={false}
            style={{
              backgroundColor: index !== 0 ? "#ffffff" : "#096dd9",
              padding: "0.5rem 1rem",
              fontWeight: "bold",
              borderRadius: "8px 8px 0 0",
            }}
          >
            {item.label} ({item.numberOfPatients})
          </Tag>
        ))}
      </div>
    </Space>
  );
}
