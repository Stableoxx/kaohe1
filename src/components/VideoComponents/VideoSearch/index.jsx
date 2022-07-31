import React from "react";
import searchBG from "../../../images/searchBg.jpg";
import axios from "axios";
import "./index.css";

// 搜索的组件
const VideoSearch = () =>  {
    return (
      <div className="search" style={{ backgroundImage: `url(${searchBG})` }}>
        <div className="serachTitle">视频中心</div>
        <div className="searchText">
          帮您快速了解汉得产品，助力交付使用全流程
        </div>
        <div className="searchInput">
          <input className="searchContent" placeholder="请搜索类别/视频名称" onChange={(value)=>{
             console.log(value)
          }} />
          <button className="searchButton" onClick={(evt)=>{
            console.log(evt.target.value)
          }}>搜索</button>
        </div>
      </div>
    );
}

export default VideoSearch
