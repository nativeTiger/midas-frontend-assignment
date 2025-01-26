import {
  UserOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  UsergroupAddOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { Card, Space, Tag, Typography } from "antd";
import { patientStatusTags } from "./dummy-data";

const { Text } = Typography;

const metricsCardData = [
  {
    title: "New Patients",
    icon: <UserOutlined />,
    value: "20",
    additionalInfo: null,
  },
  {
    title: "Average Wait Time",
    icon: <ClockCircleOutlined />,
    value: "25 min",
    additionalInfo: <InfoCircleOutlined />,
  },
  {
    title: "Patients in Queue",
    icon: <UsergroupAddOutlined />,
    value: "10",
    additionalInfo: (
      <Space direction="vertical">
        <Text type="secondary" style={{ fontWeight: "bold" }}>
          Queue No.
        </Text>
        <Text className="text-2xl font-semibold">11-20</Text>
      </Space>
    ),
  },
  {
    title: "Cancellations",
    icon: <CloseCircleOutlined />,
    value: "2",
    additionalInfo: null,
  },
  {
    title: "Urgent Cases",
    icon: <AreaChartOutlined />,
    value: "10",
    additionalInfo: (
      <Space direction="vertical">
        <Text type="secondary" style={{ fontWeight: "bold" }}>
          Queue No.
        </Text>
        <Text className="text-2xl font-semibold">4,712</Text>
      </Space>
    ),
  },
];

export function MetricsCard() {
  return (
    <Space direction="vertical">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {metricsCardData.map((item, index) => (
          <Card key={index}>
            <Space
              direction={item.additionalInfo ? "horizontal" : "vertical"}
              align="start"
              size="large"
            >
              <Space direction="vertical">
                <Text type="secondary" style={{ fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <div className="flex items-center gap-1">
                  {item.icon}
                  <Text className="text-2xl font-semibold">{item.value}</Text>
                </div>
              </Space>
              {item.additionalInfo}
            </Space>
          </Card>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
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
