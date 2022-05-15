import React, { FC } from 'react';
import {
  Form, Input, Button, Switch, Select,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const NodeForm: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <TextArea rows={4} />

      </Form.Item>

      <Form.Item
        label="Requires Service"
        name="requiresService"
        rules={[{ required: true, message: 'Please input your meta!' }]}
      >
        <Switch checkedChildren="yes" unCheckedChildren="No" defaultChecked />
      </Form.Item>

      <Form.Item
        label="Services"
        name="services"
      >
        <Select defaultValue="jack" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NodeForm;
