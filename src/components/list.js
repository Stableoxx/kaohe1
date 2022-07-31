import React, { Component } from "react";
import "../css/list.css";
// import axios from "axios";
// import Itemicon from "../images/播放.png";
import ListItem from "./listItem";
export default  class  List extends Component {
 

 

  render(){
    return (
      <div className="list">
        <div className="flexLeft">
          <div className="Ul">
            <div className="li">全部产品</div>
            <div className="li">飞搭Feida</div>
            <div className="li">汉得协同制造软件</div>
            <div className="li">汉得智能合同管理软件</div>
            <div className="li">红珊瑚（Corallium）</div>
            <div className="li">汉得运输管理软件</div>
            <div className="li">汉得智慧财务套件软件</div>
            <div className="li">汉得运输管理软件</div>
            <div className="li">汉得清分结算软件</div>
            <div className="li">海马汇HIPPIUS</div>
          </div>
        </div>
  
        <div className="flexRight">
          <div className="Righthead">
            <div className="RightHeadItem">视频分类</div>
            <div className="RightHeadItem all" >全部分类</div>
            <div className="RightHeadItem">开放平台</div>
            <div className="RightHeadItem">项目管理</div>
            <div className="RightHeadItem">开发者</div>
            <div className="RightHeadItem">猪齿鱼</div>
            <div className="RightHeadItem">海马汇</div>
          </div>
          <div className="RightItem">
            {/* <div className="RightItemitem" > */}
             <ListItem></ListItem> 
            {/* </div> */}
            <div className="RightFooter">
              <div>底部分页</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
