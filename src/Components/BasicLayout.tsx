import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

import SideMenu from "../Components/SideMenu";
import NavHeader from "../Components/Header";

import Productos from "../Components/Content/Productos";
import MiPerfil from "./Content/MiPerfil";
import MiEquipo from "./Content/Equipo";
import Negociaciones from "./Content/Negociaciones";

const { Header, Content, Footer } = Layout;

const breadcrumbNameMap = {
  "/Ordenes": "Ordenes",
  "/MiEquipo": "Mi Equipo",
  "/Negociaciones": "Negociaciones"
};
const Home: React.FC = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <Layout>
        <SideMenu />
        <Switch>
          <>
            <Layout className="marginLeft">
              <Header
                style={{
                  backgroundColor: "#FFF",
                  boxShadow: "1px 2px 5px 0 #aaa"
                }}
              >
                <NavHeader />
              </Header>
              <Content style={{ minHeight: "100vh", padding: 30 }}>
                <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                <Route exact path="/" component={MiPerfil} />
                <Route path="/Ordenes" component={Productos} />
                <Route path="/MiEquipo" component={MiEquipo} />
                <Route path="/Negociaciones" component={Negociaciones} />
              </Content>
              <Footer style={{ background: "#DFE7F4" }}>© 2020 Footer</Footer>
            </Layout>
          </>
        </Switch>
      </Layout>
    </div>
  );
});

export default Home;
