import React, { FC } from 'react';
import { Menu } from 'antd';

const Navbar: FC = () => (
  <>
    <div className="logo">
      Tujenge Pay
    </div>

    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Documentation</Menu.Item>
      <Menu.Item key="2">Blog</Menu.Item>
      <Menu.Item key="3">Contact Us</Menu.Item>
    </Menu>
  </>
);

export default Navbar;
