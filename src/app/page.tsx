"use client";

import { Layout, theme } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import ModuleCardPDB from "@/components/modules/moduleCard";
import { CollapComponent } from "@/components/collapComponent";

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const { Search } = Input;
  const { Header, Content, Footer, Sider } = Layout;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CollapComponent />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              margin: "16px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>GAB</div>
            <div>
              {/* Melhorar e componentizar o Search */}
              <Search
                placeholder="Pesquisar estação"
                enterButton="Search"
                size="small"
                suffix={suffix}
                onSearch={onSearch}
              />
            </div>
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Cards da telemetria com as estação. */}
            <ModuleCardPDB />
            {/* ----------------------------------- */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Marcelo ©{new Date().getFullYear()} Created by MMdev
        </Footer>
      </Layout>
    </Layout>
  );
}
