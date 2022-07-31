import React from "react";

import { Outlet } from 'react-router-dom';

// 内容填充
const LayoutContents = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutContents;
