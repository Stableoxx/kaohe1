import React, { Component } from "react";
import "../css/header.css";
import img from "../images/hande.png";
import imgHerd from "../images/handeheader.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img src={img} alt="" className="imgStyle" />
        </div>
        <div className="hover">应用市场</div>
        <div className="hover">开发者</div>
        <div className="hover">社区与合作伙伴</div>
        <div className="hover">支持与服务</div>
        <div className="hover">运营与管理</div>
        <div className="hover">搜索按钮</div>
        <div className="hover">通知图标</div>
        <div className="hover">控制台</div>
        <div>
          <img src={imgHerd} alt="" className="imgStyle" />
        </div>
      </div>
    );
  }
}
