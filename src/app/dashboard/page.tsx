"use client";

import { Layout, theme } from "antd";
import { CollapComponent } from "@/components/collapComponent";
import { SearchComponent } from "@/components/searchComponent";
import ModulePDB from "@/components/modules/modulePDB";
import ModuleCard from "@/components/modules/moduleCard";

export default function Dashboard() {
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CollapComponent />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "20px 16px 0", overflow: "initial" }}>
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
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Cards da telemetria com as estação. */}
            {/* <ModulePDB /> */}
            <ModuleCard />
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
////////////////////////////////////////////////////////////////

// import React from "react";
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Layout, Menu, theme } from "antd";
// import ModuleCard from '@/components/modules/moduleCard';

// const { Header, Content, Footer, Sider } = Layout;
// const nomes = ["marcelo", "mmm" ]

// const items: MenuProps["items"] = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `${nomes} ${index + 1}`,
// }));

// const App: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout hasSider>
//       <Sider
//         style={{
//           overflow: "auto",
//           height: "100vh",
//           position: "fixed",
//           left: 0,
//           top: 0,
//           bottom: 0,
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["4"]}
//           items={items}
//         />
//       </Sider>
//       <Layout style={{ marginLeft: 200 }}>
//         <Header style={{ padding: 0, background: colorBgContainer }} />
//         <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
//           <div
//             style={{
//               padding: 24,
//               textAlign: "center",
//               background: colorBgContainer,
//               borderRadius: borderRadiusLG,
//             }}
//           >
//             <ModuleCard />
//             {/* <p>long content</p>
//             {
//               // indicates very long content
//               Array.from({ length: 100 }, (_, index) => (
//                 <React.Fragment key={index}>
//                   {index % 20 === 0 && index ? "more" : "..."}
//                   <br />
//                 </React.Fragment>
//               ))
//             } */}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>
//           Marcelo ©{new Date().getFullYear()} Created by MMdev
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;
