import React, { Component } from "react";
import "../css/search.css";
import searchBG from "../images/searchBg.jpg";
import axios from "axios";

export default class Search extends Component {
  // constructor(){
  //   super()
  //   this.state={
  //     mytext:[]
  //   }
  // }
  
//  componentDidMount(){
//   axios.get('https://mock.presstime.cn/mock/62e4db0d4d5d85005786cf07/handeHead/vedio').then(res=>{
//     console.log(res.data,'search')
//     this.setState({
//      mytext:res.data,
//     })
//     console.log('mytext',this.state.data)
//   })
//  }
  render() {
    return (
      <div className="search" style={{ backgroundImage: `url(${searchBG})` }}>
        <div className="serachTitle">视频中心</div>
        <div className="searchText">
          帮您快速了解汉得产品，助力交付使用全流程
        </div>
        <div className="searchInput">
          <input className="searchContent" placeholder="请搜索类别/视频名称"   />
          <button className="searchButton">搜索</button>
        </div>
      </div>
    );
  }
}
