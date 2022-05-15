import React, { FC, useContext } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
  BorderOutlined,
  ContactsOutlined,
  FilePdfOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  LinkOutlined,
  MessageOutlined,
  SmileOutlined,
  UnorderedListOutlined,
  CompassOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { FlowContext } from './FlowSection';

const NodeSelector: FC = () => {
  const { addNode } = useContext(FlowContext);
  if (!addNode) {
    throw Error('Node Selector not inherited');
  }
  const menu = (
    <Menu onClick={(menuInfo) => addNode(menuInfo.key)}>
      <Menu.Item key="text" icon={<MessageOutlined />}>Text</Menu.Item>
      <Menu.Item key="button" icon={<BorderOutlined />}>Button</Menu.Item>
      <Menu.Item key="contact" icon={<ContactsOutlined />}>Contact</Menu.Item>
      <Menu.Item key="document" icon={<FilePdfOutlined />}>Document</Menu.Item>
      <Menu.Item key="image" icon={<PictureOutlined />}>Image</Menu.Item>
      <Menu.Item key="list" icon={<UnorderedListOutlined />}>List</Menu.Item>
      <Menu.Item key="location" icon={<CompassOutlined />}>Location</Menu.Item>
      <Menu.Item key="sticker" icon={<SmileOutlined />}>Sticker</Menu.Item>
      <Menu.Item key="url" icon={<LinkOutlined />}>URL</Menu.Item>
      <Menu.Item key="video" icon={<VideoCameraOutlined />}>Video</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button>
        Add Step
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default NodeSelector;
