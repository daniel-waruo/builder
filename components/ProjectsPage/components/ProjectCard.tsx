import { Card, Col } from 'antd';
import {
  DeleteOutlined, EditOutlined, EyeTwoTone,
} from '@ant-design/icons';
import React, { FC } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import Link from 'next/link';
import { IProject } from '../../../interfaces/project';
import { removeProject as removeProjectAction } from '../../../store/actions/project';
import { IRootActionTypes, IRootState } from '../../../interfaces/root';
import { setModal as setModalAction } from '../../../store/actions/shared';
import { PROJECTS_FORM_MODAL } from '../../Forms/ProjectsForm';
import { setProject } from '../../../store/actionCreators/project';

type ProjectCardProps = {
  project:IProject,
  // eslint-disable-next-line no-unused-vars
  removeProject:(project:IProject)=>void
  // eslint-disable-next-line no-unused-vars
  openEditModal:(project:IProject)=>void
}

const ProjectCard:FC<ProjectCardProps> = (
  { project, removeProject, openEditModal }:ProjectCardProps,
) => {
  const { name, description } = project;
  return (
    <Col span={6}>
      <Card
        title={name}
        actions={[
          (
            <Link
              href="/projects/[slug]"
              as={`/projects/${project.id}`}
            >
              <EyeTwoTone key="view" />
            </Link>
          ),
          <EditOutlined
            key="edit"
            onClick={() => {
              openEditModal(project);
            }}
          />,
          <DeleteOutlined key="delete" onClick={() => removeProject(project)} />,
        ]}
      >
        {description}
      </Card>
    </Col>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  removeProject: (project:IProject) => dispatch(removeProjectAction(project)),
  openEditModal: (project:IProject) => {
    dispatch(setProject(project));
    dispatch(setModalAction({ name: PROJECTS_FORM_MODAL, isVisible: true }));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
