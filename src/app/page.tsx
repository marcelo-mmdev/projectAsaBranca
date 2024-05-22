"use client";

import { Layout, theme } from "antd";
import { CollapComponent } from "@/components/collapComponent";
import { SearchComponent } from '@/components/searchComponent';
import ModulePDB from '@/components/modules/modulePDB';
import ModuleCard from '@/components/modules/moduleCard';

export default function Home() {
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              <SearchComponent />
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
            <ModulePDB />
            {/* <ModuleCard /> */}
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
