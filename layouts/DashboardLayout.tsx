import React, { FC, useState } from 'react';

import { Layout, Spin } from 'antd';

import { connect } from 'react-redux';
import { Navbar, Sidebar } from '../components';
import { IRootState } from '../interfaces/root';

const {
  Header, Content, Footer, Sider,
} = Layout;

interface IDashboardLayoutProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode,
  isLoading: boolean
}

const DashboardLayout: FC<IDashboardLayoutProps> = (
  { children, isLoading }: IDashboardLayoutProps,
) => {
  const [year] = useState(new Date().getFullYear());

  return (
    <Spin style={{ zIndex: 100000000 }} spinning={isLoading}>
      <Layout style={{ height: '100vh' }}>
        <Header className="header">
          <Navbar />
        </Header>
        <Layout>
          <Sider className="site-layout-background" width={200}>
            <Sidebar />
          </Sider>
          <Layout style={{ padding: '0 24px 24px', height: '95vh', overflow: 'auto' }}>
            <Content
              className="site-layout-content"
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Layout>
        <Footer style={{ textAlign: 'center' }}>
          Tujenge Pay &copy;
          {' '}
          { year }
        </Footer>
      </Layout>
    </Spin>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isLoading: state.shared.isLoading,
});

export default connect(mapStateToProps)(DashboardLayout);
