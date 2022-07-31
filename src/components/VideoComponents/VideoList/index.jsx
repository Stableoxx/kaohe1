import React, { Component } from "react";
import "../../../css/list.css";
import axios from "axios";
import Itemicon from "../../../images/播放.png";
import "./index.css";
import { Pagination } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const VideoList = () => {

  const videolist = [
    {
      id: "1",
      img: "http://dummyimage.com/200x100/50B347/FFF&text=EasyMock",
      title: "Hpgh ihaygykhd gpg",
      conten:
        "Magzpnau xllxd ocqbiajpe tlrmdlcev ookqa dvkti phrmmdz bbvohahg dprxvq wlnmnsr kfb chmfbxsgy f",
      count: "999",
      length: "12",
    },
    {
      id: "2",
      img: "http://dummyimage.com/200x100/50B347/FFF&text=EasyMock",
      title: "Hpgh ihaygykhd gpg",
      conten:
        "Magzpnau xllxd ocqbiajpe tlrmdlcev ookqa dvkti phrmmdz bbvohahg dprxvq wlnmnsr kfb chmfbxsgy f",
      count: "999",
      length: "12",
    },
    {
      id: "3",
      img: "http://dummyimage.com/200x100/50B347/FFF&text=EasyMock",
      title: "Hpgh ihaygykhd gpg",
      conten:
        "Magzpnau xllxd ocqbiajpe tlrmdlcev ookqa dvkti phrmmdz bbvohahg dprxvq wlnmnsr kfb chmfbxsgy f",
      count: "999",
      length: "12",
    },
    {
      id: "4",
      img: "http://dummyimage.com/200x100/50B347/FFF&text=EasyMock",
      title: "Hpgh ihaygykhd gpg",
      conten:
        "Magzpnau xllxd ocqbiajpe tlrmdlcev ookqa dvkti phrmmdz bbvohahg dprxvq wlnmnsr kfb chmfbxsgy f",
      count: "999",
      length: "12",
    },
  ];
  return (
    <>
      <div className="videoListBox">
        {videolist.map((item) => {
          return (
            <div key={item.id} className="video-list">
              <img src={item.img} alt="" />
              <div>{item.title}</div>
              <div className="videoConten">{item.conten}</div>
              <div className="itemFooter">
                  <img alt="" src={Itemicon} className="itemIcon" />
                <div className="count">{item.count}</div>
                <div className="lenght">{item.length+'节'}</div>
              </div>
            </div>
          );
        })}
         <div className="page">
         <Pagination current={1} onChange={2} total={50} />
            </div>
      </div>

      {/* <div className="Rightimg">
        <img src="" alt="" className="Rightimg" />{" 图片"}
      </div>
      <div className="itemTilte">'标题'</div>
      <div className="itemDetail">'详情'</div>
      <div className="itemFooter">
        <div className="itemIcon">
          <img alt="" src={Itemicon} className="itemIcon" />
        </div>
        <div className="count">'观看次数'</div>
        <div className="lenght">'12节'</div>
      </div> */}
    </>
  );
};

export default VideoList;
