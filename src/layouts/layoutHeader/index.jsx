import React from "react";

import "./index.css";
import img from "../../images/hande.png";
import imgHerd from "../../images/handeheader.png";
// 头部组件的布局
const layoutHeader = () => {
  const MenuItem = [
    { label: "应用市场", key: "/home" },
    {
      label: "开发者",
      key: "/dev",
      children: [],
    },
    {
      label: "社区与合作伙伴",
      key: "/com",
    },
    {
      label: "支持与服务",
      key: "/supportServices",
    },
    {
      label: "运营与管理",
      key: "/operations",
    },
  ];
  return (
    <>
      <div className="header">
        <div>
          <img src={img} alt="" className="imgStyle" />
        </div>
        {MenuItem.map((item) => {
          return (
            <div key={item.key} className="menu-item">
              {item.label}
            </div>
          );
        })}
        <div>
          <div className="headerRight">
            <div className="hover">搜索按钮</div>
            <div className="hover">通知图标</div>
            <div className="hover">控制台</div>
            <div>
              <img src={imgHerd} alt="" className="imgStyle" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default layoutHeader;
