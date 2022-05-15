import React, { FC, useEffect } from 'react';
import {
  Tabs, PageHeader, Avatar, Row, Col, Card, Typography,
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
  TwitterOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { ServicesForm, ServicesTable } from '../index';
import FlowSection from '../Flow/FlowSection';
import { IRootActionTypes, IRootState } from '../../interfaces/root';
import { IProject } from '../../interfaces/project';
import { fetchProject } from '../../store/actions/project';
import PageSpinner from '../PageSpinner';

const { TabPane } = Tabs;
const { Meta } = Card;
const { Title, Paragraph } = Typography;

type ProjectProps = {
  project: IProject | null,
  // eslint-disable-next-line no-unused-vars
  loadProject: (projectId:number) => void
}

const ProjectPage: FC<ProjectProps> = ({ project, loadProject }:ProjectProps) => {
  // get slug from query
  const { query: { slug } } = useRouter();
  useEffect(() => {
    if (slug && typeof slug === 'string') {
      loadProject(parseInt(slug, 10));
    }
  }, [slug]);
  if (!project) {
    return <PageSpinner />;
  }
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={project.name}
        subTitle="Manage your project"
        ghost={false}
        onBack={() => window.history.back()}
      />

      <Tabs defaultActiveKey="flow">
        <TabPane tab="Overview" key="overview">
          <Title>Avatar</Title>
          <Avatar size={64} icon={<UserOutlined />} />

          <Title>Bot Name</Title>
          <Paragraph>Bot Name</Paragraph>

          <Title>Custom Error Message</Title>
          <Paragraph>Sorry! I do not understand. Please try something different</Paragraph>
        </TabPane>

        <TabPane tab="Flow" key="flow">
          <FlowSection />
        </TabPane>

        <TabPane tab="Configurations" key="configurations">
          <Row gutter={[16, 16]}>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Card
                bordered={false}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<WhatsAppOutlined />}
                  title="Whatsapp"
                  description="Manage your whatsapp API configurations"
                />
              </Card>
            </Col>

            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Card
                bordered={false}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<SendOutlined />}
                  title="Telegram"
                  description="Manage your Telegram Bot configurations"
                />
              </Card>
            </Col>

            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Card
                bordered={false}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<TwitterOutlined />}
                  title="Twitter"
                  description="Manage your Twitter Bot configurations"
                />
              </Card>
            </Col>

            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Card
                bordered={false}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<FacebookOutlined />}
                  title="Messenger"
                  description="Manage your Messenger Bot configurations"
                />
              </Card>
            </Col>

            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <Card
                bordered={false}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <Meta
                  avatar={<InstagramOutlined />}
                  title="Instagram"
                  description="Manage your Instagram Bot configurations"
                />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Services" key="services">
          <Row gutter={[16, 16]}>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <ServicesForm />
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <ServicesTable />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  project: state.projects.project,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  loadProject: (projectId:number) => {
    dispatch(fetchProject(projectId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
