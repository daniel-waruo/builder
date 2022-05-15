import React, { FC } from 'react';
import { Spin } from 'antd';

const PageSpinner:FC = () => (
  <Spin spinning><div style={{ height: '100vh' }} /></Spin>
);

export default PageSpinner;
