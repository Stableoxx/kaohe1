import React, { Component } from "react";
import "../css/list.css";
import axios from "axios";
import Itemicon from "../images/播放.png";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vedio: [],
            isLoaded: false
        }
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://mock.presstime.cn/mock/62e4db0d4d5d85005786cf07/handeHead/vedio')
            .then(function (response) {
                console.log(response.data)
                _this.setState({
                    vedio: response.data,
                    isLoaded: true
                });
                console.log(_this.state.vedio)
                console.log(_this.state.vedio.data)

            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }


    render(){
        if(!this.state.isLoaded){
            return <div>Loading</div>
        }
        else{
            return this.state.vedio.data.map((item)=>{
                return   <>  <div className="Rightimg">
                         <img
                            src={item.image.image}
                           alt=""
                            className="Rightimg"
                           /> </div>
                           <div className="itemTilte">{item.text.sentence}</div>
           <div className="itemDetail">{item.text.paragraph}</div>
           <div className="itemFooter">
             <div className="itemIcon">
                <img alt="" src={Itemicon} className="itemIcon" />
              </div>
             <div className="count">{item.base.integer}</div>
             <div className="lenght">{item.base.integer + "节"}</div>
          </div>


                </>
            
    
            })
            
        }
      
    }

    // render() {
    //      return(
    //      <>
    //      {
    //     //    if(!this.state.isLoaded){
    //     //     return <div>{Loading}</div>
    //     //    }
    //     //    else{
    //     //       return <div>{Loading}</div>
    //     //    }

        
    //     //     // if(!this.state.isLoaded)
    //     //     // {
    //         //    return <div>Loading</div>
    //         // }else{
    //         //    return  this.state.vedio.map((item) => {
    //         //         <>
    //         //         <div className="Rightimg">
    //         //           <img
    //         //             src={item.image.image}
    //         //             alt=""
    //         //             className="Rightimg"
    //         //           /> </div>
    //         //         <div className="itemTilte">{item.text.sentence}</div>
    //         //         <div className="itemDetail">{item.text.paragraph}</div>
    //         //         <div className="itemFooter">
    //         //           <div className="itemIcon">
    //         //             <img alt="" src={Itemicon} className="itemIcon" />
    //         //           </div>
    //         //           <div className="count">{item.base.integer}</div>
    //         //           <div className="lenght">{item.base.integer + "节"}</div>
    //         //         </div>
    //         //       </>
               



               
            
    //         // })
    //     // }
    //     }
         
    //      </>
    //      )
    // }  
    
}