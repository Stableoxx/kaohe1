import React, { Component } from "react";
import '../css/searchItem.css'

export default class SearchItem extends Component {
  render() {
    return <div className="headTotal">
      <div className="ItemHead">
        <div className="ItemCount">一共搜索到n个结果</div>
      </div>
      <div className="itemCon">
        <div className="itemIndex">
          {/* <img src="" alt="" className="imgIndex">图片</img> */}
          <div className="imgIndex"></div>
          <div className="conInex">
            <h1>标题</h1>
            <span>介绍</span>
          </div>
        </div>
      </div>
      
    </div>;
  }
}
