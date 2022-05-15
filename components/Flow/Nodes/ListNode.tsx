import React, { FC } from 'react';
import {
  Card, Button, Form, Input, List,
} from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
];

const ListNode: FC = () => (
  <Card title="Default size card" extra={<EditOutlined />}>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications"
          />
        </List.Item>
      )}
    />

    <Form>
      <Form.Item>
        <Input placeholder="Basic usage" />
      </Form.Item>

      <Form.Item>
        <Button type="dashed" block icon={<PlusOutlined />}>
          Add List Item
        </Button>
      </Form.Item>
    </Form>
  </Card>
);

export default ListNode;
