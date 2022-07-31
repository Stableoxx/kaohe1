import React from "react";
import ProductList from "./ProductList";
import VideoCategoryList from "./VideoCategoryList";
import VideoSearch from "./VideoSearch";
import VideoList from "./VideoList";
import VideoType from "./VideoType";
import SearchEndItem from "./SearchEndItem";
import "./index.css";

// 这是整个视频的组件，包括搜索，产品列表。视频类型、数据列表
const VideoComponents = () => {
  return (
    <div>
      <VideoSearch />
      <div className="video-box">
        <div className="video-product-list-box">
          <ProductList />
        </div>
        {/* <div>
          <VideoCategoryList />
        </div> */}
        <div >
          <div>
          <VideoType />
          </div>
           <div className="videoList-box">
           <VideoList />
           </div>
        </div>
      </div>
      <div>
          <SearchEndItem/>
        </div>
    </div>
  );
};

export default VideoComponents;
