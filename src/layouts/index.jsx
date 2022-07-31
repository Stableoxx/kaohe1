import React from "react";
import LayoutHeader from './layoutHeader';
import LayoutContents from './LayoutContents';


// 整个页面的布局
const LayoutApp = () => {
  return (
    <>
      <header>
        <LayoutHeader />
      </header>
      <div>
        <LayoutContents />
      </div>
    </>
  );
};

export default LayoutApp;
