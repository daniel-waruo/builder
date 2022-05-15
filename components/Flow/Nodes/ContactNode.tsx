import React, { FC } from 'react';
import {
  Card, Button, Form, Input,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ContactNode: FC = () => (
  <Card>
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

export default ContactNode;
