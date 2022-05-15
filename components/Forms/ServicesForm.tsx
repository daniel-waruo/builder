import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const ServicesForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Endpoint"
        name="endpoint"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Meta"
        name="meta"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Authorization"
        name="authorization"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
};

export default ServicesForm;
