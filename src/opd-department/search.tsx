import { GetProps, Input } from "antd";
import { useSearchParams } from "react-router";
import { QUERY_CONSTANT } from "../constant";

type SearchProps = GetProps<typeof Input.Search>;

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch: SearchProps["onSearch"] = (value) => {
    const urlParams = new URLSearchParams(searchParams);
    if (value) {
      urlParams.set(QUERY_CONSTANT.SEARCH, value);
    } else {
      urlParams.delete(QUERY_CONSTANT.SEARCH);
    }
    setSearchParams(urlParams);
  };

  return (
    <div className="md:w-96">
      <Input.Search
        defaultValue={searchParams.get(QUERY_CONSTANT.SEARCH) ?? ""}
        placeholder="Search for modules, submodules, settings, etc"
        onSearch={handleSearch}
        allowClear
        style={{ padding: "1rem 0" }}
      />
    </div>
  );
}
