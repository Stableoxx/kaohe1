import React from "react";
import './index.css'


const  SearchEndItem = ()=>{
    const searchlist = [
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
    const lenght =   searchlist.length;
 return(

     <>
      <div className="headTotal">
        {searchlist.map((item) => {
          return (
            <div key={item.id} className="itemCon">
              <img src={item.img} alt="" className="imgIndex" />
              <div className="conInex">
              <h1>{item.title}</h1>
              <span>{item.conten}</span>
              </div>
             
            </div>
          );
        })}
      </div>
        </>
    // <div className="headTotal">
    //   <div className="ItemHead">
    //     <div className="ItemCount">{'一共搜索到'+lenght+'个结果'}</div>
    //   </div>
    //   <div className="itemCon">
    //     <div className="itemIndex">
    //       {/* <img src="" alt="" className="imgIndex">图片</img> */}
    //       <div className="imgIndex"></div>
    //       <div className="conInex">
    //         <h1>标题</h1>
    //         <span>介绍</span>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>;
    // </>
 )
}

export default SearchEndItem;



