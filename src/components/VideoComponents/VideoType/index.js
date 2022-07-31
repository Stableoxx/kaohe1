import React from "react";
import './index.css'


const VideoType = ()=>{
    const VideoTypeList = [
        {
          id: "1",
          name: "视频分类",
        },
        {
          id: "2",
          name: "全部分类",
        },
        {
          id: "3",
          name: "开发平台",
        },
        {
          id: "4",
          name: "项目管理",
        },
        {
          id: "5",
          name: "开发者",
        },
        {
          id: "6",
          name: "猪齿鱼",
        },
        {
          id: "7",
          name: "海马汇",
        },
      ];
      return (
        <>
          <div className="vedio-type">
            {VideoTypeList.map((item) => {
              return (
                <div key={item.id} className="vedio-type-list">
                  {item.name}
                </div>
              );
            })}
          </div>
        </>
      );
}

export default VideoType