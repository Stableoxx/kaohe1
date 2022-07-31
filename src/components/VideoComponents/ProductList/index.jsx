import React from "react";
import './index.css'

// 产品分类组件
const ProductList = () => {
  const ItemList = [
    {
      id: "all",
      name: "全部产品",
    },
    {
      id: "1",
      name: "飞搭Feida",
    },
    {
      id: "2",
      name: "汉得协同制造软件",
    },
    {
      id: "3",
      name: "汉得智能合同管理软件",
    },
    {
      id: "4",
      name: "红珊瑚(Corallium)",
    },
    {
      id: "5",
      name: "汉得运营管理软件",
    },
    {
      id: "6",
      name: "汉得智慧财务套件软件",
    },
    {
      id: "7",
      name: "汉得运输管理软件",
    },
    {
      id: "8",
      name: "汉得清分结算软件",
    },
    {
      id: "9",
      name: "海马汇HIPPIUS",
    },
  ];
  return (
    <>
      <div className="product-list">
        {ItemList.map((item) => {
          return (
            <div key={item.id} className="item-list">
              {item.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
