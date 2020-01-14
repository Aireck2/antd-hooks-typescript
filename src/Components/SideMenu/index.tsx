import React from "react";

import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideMenu: React.FC = () => {
  return (
    <Sider>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to="/">
            <Icon type="home" />
            <span className="nav-text">Mi Perfil</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to="/Ordenes">
            <Icon type="bar-chart" />
            <span className="nav-text">Ordenes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/MiEquipo">
            <Icon type="usergroup-add" />
            <span className="nav-text">Mi Equipo</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/Negociaciones">
            <Icon type="profile" />
            <span className="nav-text">Negociaciones</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="5">
          <Icon type="user" />
          <span className="nav-text">Stock</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="message" />
          <span className="nav-text">Referidos</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="area-chart" />
          <span className="nav-text">Analitics</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="setting" />
          <span className="nav-text">Configuracion</span>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="setting" />
          <span className="nav-text">Descuentos</span>
        </Menu.Item>
        <Menu.Item key="10">
          <Icon type="setting" />
          <span className="nav-text">Pedidos</span>
        </Menu.Item>
        <Menu.Item key="11" className="log-out">
          <Icon type="setting" />
          <span className="nav-text">Log out</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default SideMenu;
