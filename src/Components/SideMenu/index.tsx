import React from "react";
import { Layout } from "antd";
import MenuList from "./MenuList";

const { Sider } = Layout;

const SideMenu: React.FC = () => {
  return (
    <Sider>
      <MenuList />
    </Sider>
  );
};
export default SideMenu;
