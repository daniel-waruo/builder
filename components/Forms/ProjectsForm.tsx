import React, { FC } from 'react';
import {
  Button, Form, Input, Modal,
} from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { IRootActionTypes, IRootState } from '../../interfaces/root';
import { IProject } from '../../interfaces/project';
import { addProject as addProjectAction, editProject as editProjectAction } from '../../store/actions/project';
import { setModal as setModalAction, setLoading as setLoadingAction } from '../../store/actions/shared';
import { setProject } from '../../store/actionCreators/project';

const { TextArea } = Input;

export const PROJECTS_FORM_MODAL = 'projects_form';

type ProjectsFormProps = {
  project: IProject | null,
  isVisible: boolean,
  // eslint-disable-next-line no-unused-vars
  addProject: (project: IProject) => void
  // eslint-disable-next-line no-unused-vars
  editProject: (project: IProject) => void
  // eslint-disable-next-line no-unused-vars
  setLoading: (isLoading: boolean) => void
  // eslint-disable-next-line no-unused-vars
  setModal: (isVisible: boolean) => void
  // eslint-disable-next-line no-unused-vars
  resetProject: () => void
}

const ProjectsForm: FC<ProjectsFormProps> = ({
  project,
  addProject,
  editProject,
  setLoading,
  setModal,
  isVisible,
  resetProject,
}: ProjectsFormProps) => {
  const [form] = Form.useForm();
  if (!isVisible) return null;
  // fix for resetting the forms after rendering
  // so that the values can change
  // setTimeout(() => form.resetFields(), 0);
  const onFinishHandler = (values: IProject) => {
    if (!project) {
      addProject(values);
    } else if (project.id) {
      editProject({ ...project, ...values });
    }
    setModal(false);
    setLoading(false);
    form.resetFields();
    resetProject();
  };
  return (
    <Modal
      title="Projects Form"
      visible={isVisible}
      onCancel={() => {
        form.resetFields();
        resetProject();
        setModal(false);
      }}
      footer={null}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinishHandler}
        initialValues={project || undefined}
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
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">SUBMIT</Button>
        </div>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state: IRootState) => {
  const { project } = state.projects;
  const isVisible = state.shared.modal.isVisible && state.shared.modal.name === PROJECTS_FORM_MODAL;
  return { project, isVisible };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  addProject: (project: IProject) => dispatch(addProjectAction(project)),
  editProject: (project: IProject) => dispatch(editProjectAction(project)),
  setLoading: (isLoading: boolean) => dispatch(setLoadingAction(isLoading)),
  setModal: (isVisible: boolean) => dispatch(
    setModalAction({ name: PROJECTS_FORM_MODAL, isVisible }),
  ),
  resetProject: () => dispatch(setProject(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsForm);
