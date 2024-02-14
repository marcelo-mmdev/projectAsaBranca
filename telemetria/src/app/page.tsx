"use client";

import CardPDB from "@/components/cardPDB";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <DesktopOutlined />),
  getItem("Telemetria", "2", <PieChartOutlined />),
  getItem("Usuario", "sub1", <UserOutlined />, [getItem("Marcelo", "3")]),
  getItem("Downloads", "4", <FileOutlined />),
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(true);
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
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
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
            <div>Grupo Asa Branca</div>
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
            <CardPDB />
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
