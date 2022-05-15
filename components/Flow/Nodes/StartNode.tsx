import React, { FC } from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Handle, Position } from 'react-flow-renderer';

type StartNodeProps = {
  id:string
}
const StartNode: FC<StartNodeProps> = ({ id }:StartNodeProps) => (
  <>
    <Button type="primary" icon={<PoweroffOutlined />}>Starting Point</Button>
    <Handle id={id} type="source" position={Position.Bottom} style={{ width: 15, height: 15, zIndex: 100 }} />
  </>
);

export default StartNode;
