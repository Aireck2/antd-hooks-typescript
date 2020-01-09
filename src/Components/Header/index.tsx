import React from "react";
import { Icon, Badge, Input, Avatar, Popover } from "antd";
const Header: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginRight: "20px", padding: "0 20", cursor: "pointer" }}>
        <Icon type="align-left" style={{ fontSize: "20px", color: "black" }} />
      </div>
      <div className="certain-category-search-wrapper" style={{ width: 500 }}>
        <Input
          placeholder="Search"
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: 190,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Popover className="popover">
          <div>
            <Badge dot>
              <Icon style={{ fontSize: "20px" }} type="mail" />
            </Badge>
          </div>
        </Popover>
        <Popover
          className="popover"
          content={<div style={{ cursor: "pointer" }}>Close</div>}
          title="Notifications"
          trigger="click"
        >
          {/* <Button type="primary">Click me</Button> */}
          <div>
            <Badge dot>
              <Icon style={{ fontSize: "20px" }} type="bell" />
            </Badge>
          </div>
        </Popover>
        <Popover
          content={
            <div>
              <p>Mi profile</p>
              <a href="/">Sign out</a>
            </div>
          }
        >
          <Avatar shape="circle" icon="user" style={{ marginRight: "10px" }} />
          <Icon type="caret-down" />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
