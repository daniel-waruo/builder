import React, { FC } from 'react';
import {
  Card, Button, Form, Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const URLNode: FC = () => (
  <Card>
    <Form.Item>
      <Input placeholder="Basic usage" type="url" disabled />
    </Form.Item>

    <Form>
      <Form.Item>
        <Input placeholder="Basic usage" type="url" />
      </Form.Item>

      <Form.Item>
        <Button type="dashed" block icon={<PlusOutlined />}>
          Create URL
        </Button>
      </Form.Item>
    </Form>
  </Card>
);

export default URLNode;
