import React, { FC, useEffect } from 'react';
import { Row, PageHeader, Button } from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { ProjectsForm } from '../Forms';
import { IProjectsResponse } from '../../interfaces/project';
import { IRootActionTypes, IRootState } from '../../interfaces/root';
import { fetchProjects } from '../../store/actions/project';
import ProjectCard from './components/ProjectCard';
import PageSpinner from '../PageSpinner';
import { setModal as setModalAction } from '../../store/actions/shared';
import { PROJECTS_FORM_MODAL } from '../Forms/ProjectsForm';

type ProjectsPageProps = {
  projectsResponse: IProjectsResponse | null,
  loadProjects: () => void,
  openModal: ()=>void
}

const ProjectsPage: FC<ProjectsPageProps> = ({
  loadProjects, projectsResponse, openModal,
}: ProjectsPageProps) => {
  useEffect(() => { loadProjects(); }, []);
  if (!projectsResponse) {
    return <PageSpinner />;
  }
  const projects = projectsResponse.data;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Projects"
        subTitle="Manage all your bot projects"
        ghost={false}
        onBack={() => window.history.back()}
        extra={[
          <Button key="createProject" type="primary" onClick={() => openModal()}>
            Create Project
          </Button>,
        ]}
      />

      <Row gutter={16} style={{ marginTop: '1.5rem' }}>
        {projects.map(
          (project) => (
            <ProjectCard project={project} key={project.id} />
          ),
        )}
      </Row>
      <ProjectsForm />
    </>
  );
};
const mapStateToProps = (state: IRootState) => ({
  projectsResponse: state.projects.projects,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  loadProjects: () => dispatch(fetchProjects()),
  openModal: () => dispatch(setModalAction({ name: PROJECTS_FORM_MODAL, isVisible: true })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
