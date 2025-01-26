import { GetProp, TableProps } from "antd";
import { useSearchParams } from "react-router";
import { Pagination as TablePagination } from "antd";
import { DEFAULT_PARAMS, QUERY_CONSTANT } from "../constant";

type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

export function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagination: TablePaginationConfig = {
    current: Number(
      searchParams.get(QUERY_CONSTANT.PAGE) ?? DEFAULT_PARAMS.PAGE
    ),
    pageSize: Number(
      searchParams.get(QUERY_CONSTANT.PAGE_SIZE) ?? DEFAULT_PARAMS.PAGE_SIZE
    ),
    total: 200, // total number of items from API response
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set(QUERY_CONSTANT.PAGE, String(page ?? DEFAULT_PARAMS.PAGE));
    urlParams.set(
      QUERY_CONSTANT.PAGE_SIZE,
      String(pageSize ?? DEFAULT_PARAMS.PAGE_SIZE)
    );
    setSearchParams(urlParams);
  };
  return (
    <TablePagination
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
  );
}
