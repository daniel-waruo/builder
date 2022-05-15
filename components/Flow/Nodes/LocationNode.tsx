import React, { FC } from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const LocationNode: FC = () => (
  <Button type="primary" icon={<PoweroffOutlined />}>Starting Point</Button>
);

export default LocationNode;
