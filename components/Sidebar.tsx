import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';

import { Menu, Spin } from 'antd';
import {
  ProjectOutlined,
  UsergroupAddOutlined,
  LineChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  BorderlessTableOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { ThunkDispatch } from 'redux-thunk';
import { fetchProjects } from '../store/actions/project';
import { IRootActionTypes, IRootState } from '../interfaces/root';
import { IProjectsResponse } from '../interfaces/project';

const { SubMenu } = Menu;

type SidebarProps = {
  projectsResponse: IProjectsResponse | null,
  loadProjects: () => void
}

const Sidebar: FC<SidebarProps> = ({ projectsResponse, loadProjects }: SidebarProps) => {
  useEffect(() => {
    loadProjects();
  }, []);
  return (
    <Menu
      mode="inline"
      style={{ height: '100%' }}
    >
      <SubMenu key="sub1" icon={<ProjectOutlined />} title="Projects">
        <Menu.Item key="/projects" icon={<AppstoreAddOutlined />}>
          <Link href="/projects">
            Manage
          </Link>
        </Menu.Item>
        {
          projectsResponse?.data.map(
            (project) => (
              <Menu.Item key={`/projects/${project.id}`} icon={<BorderlessTableOutlined />}>
                <Link
                  href="/projects/[slug]"
                  as={`/projects/${project.id}`}
                >
                  {project.name}
                </Link>
              </Menu.Item>
            ),
          ) || <Spin spinning />
        }
      </SubMenu>

      <Menu.Item key="/users" icon={<UsergroupAddOutlined />}>
        <Link href="/users">Users</Link>
      </Menu.Item>

      <Menu.Item key="/analytics" icon={<LineChartOutlined />}>
        <Link href="/analytics">Analytics</Link>
      </Menu.Item>

      <Menu.Item key="/settings" icon={<SettingOutlined />}>
        <Link href="/settings">Settings</Link>
      </Menu.Item>

      <Menu.Item key="Logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = (state: IRootState) => ({
  projectsResponse: state.projects.projects,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  loadProjects: () => dispatch(fetchProjects()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
