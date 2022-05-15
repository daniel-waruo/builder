import React, { FC, useState } from 'react';
import {
  Card, Button, Form, Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ButtonNode: FC = () => {
  const [button, setButtons] = useState();

  return (
    <Card>
      <Button type="dashed" block>Starting Point</Button>

      <Form>
        <Form.Item>
          <Input placeholder="Basic usage" />
        </Form.Item>

        <Form.Item>
          <Button type="dashed" block icon={<PlusOutlined />}>
            Add sights
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ButtonNode;
