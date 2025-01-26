import { DatePicker, Select, TimeRangePickerProps } from "antd";
import { doctorSelectOptions } from "./dummy-data";
import { useSearchParams } from "react-router";
import dayjs from "dayjs";
import { QUERY_CONSTANT } from "../constant";

const { RangePicker } = DatePicker;

export function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const startDate = searchParams.get(QUERY_CONSTANT.DATE_RANGE.START);
  const endDate = searchParams.get(QUERY_CONSTANT.DATE_RANGE.END);

  const defaultValue: [dayjs.Dayjs | null, dayjs.Dayjs | null] = [
    startDate ? dayjs(startDate) : null,
    endDate ? dayjs(endDate) : null,
  ];

  const handleChange: TimeRangePickerProps["onChange"] = (date, dateString) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(QUERY_CONSTANT.DATE_RANGE.START, dateString[0]);
    urlParams.set(QUERY_CONSTANT.DATE_RANGE.END, dateString[1]);

    if (!date) {
      urlParams.delete(QUERY_CONSTANT.DATE_RANGE.START);
      urlParams.delete(QUERY_CONSTANT.DATE_RANGE.END);
    }
    setSearchParams(urlParams);
  };

  const handleSelectDoctor = (value: string) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(QUERY_CONSTANT.DOCTOR, value);
    setSearchParams(urlParams);
  };

  return (
    <div className="py-4">
      <p className="text-gray-500 text-sm font-bold">Filter</p>
      <div className="flex gap-4 sm:items-center flex-col sm:flex-row">
        <div className="sm:w-64">
          <p className="text-gray-700 text-sm font-bold">Period</p>
          <RangePicker
            onChange={handleChange}
            defaultValue={defaultValue}
            style={{ width: "100%" }}
          />
        </div>
        <div className="sm:w-64">
          <p className="text-gray-700 text-sm font-bold">Filter via Doctor</p>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Doctor Name"
            options={doctorSelectOptions}
            onChange={handleSelectDoctor}
          />
        </div>
      </div>
    </div>
  );
}
