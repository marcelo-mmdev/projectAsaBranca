import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";

export const SearchComponent = () => {

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  return (
    <Search
      placeholder="Pesquisar estação"
      enterButton="Search"
      size="small"
      suffix={suffix}
      onSearch={onSearch}
    />
  );
};
