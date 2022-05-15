import React, { FC } from 'react';
import {
  Card, Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const DocumentNode: FC = () => (
  <Card>
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    >
      <PlusOutlined />
    </Upload>
  </Card>
);

export default DocumentNode;
