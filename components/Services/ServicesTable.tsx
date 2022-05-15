import React, { FC } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Meta',
    dataIndex: 'meta',
    key: 'meta',
  }, {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  }, {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

const data = [
  {
    key: '1',
    name: 'M-Pesa',
    meta: '',
    createdAt: '',
    updatedAt: '',
  },
];

const ServicesTable: FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default ServicesTable;
