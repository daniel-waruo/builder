import React, { FC } from 'react';
import {
  Button, Form, Input, Modal,
} from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { IRootActionTypes, IRootState } from '../../interfaces/root';
import { IJourney } from '../../interfaces/project';
import { addProject as addProjectAction, editProject as editProjectAction } from '../../store/actions/project';
import { setModal as setModalAction, setLoading as setLoadingAction } from '../../store/actions/shared';
import { setProject } from '../../store/actionCreators/project';

const { TextArea } = Input;

export const JOURNEYS_FORM_MODAL = 'journeys_form';

type JourneyFormProps = {
  journey: IJourney | null,
  isVisible: boolean,
  // eslint-disable-next-line no-unused-vars
  addJourney: (journey: IJourney) => void
  // eslint-disable-next-line no-unused-vars
  editJourney: (journey: IJourney) => void
  // eslint-disable-next-line no-unused-vars
  setLoading: (isLoading: boolean) => void
  // eslint-disable-next-line no-unused-vars
  setModal: (isVisible: boolean) => void
  // eslint-disable-next-line no-unused-vars
  resetProject: () => void
}
const JourneysForm: FC<JourneyFormProps> = ({
  journey,
  addJourney,
  editJourney,
  setLoading,
  setModal,
  isVisible,
  resetProject,
}: JourneyFormProps) => {
  const [form] = Form.useForm();
  if (!isVisible) return null;
  // fix for resetting the forms after rendering
  // so that the values can change
  // setTimeout(() => form.resetFields(), 0);
  const onFinishHandler = (values: IJourney) => {
    if (!journey) {
      addJourney(values);
    } else if (journey.id) {
      editJourney({ ...journey, ...values });
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
        initialValues={journey || undefined}
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
  const isVisible = state.shared.modal.isVisible && state.shared.modal.name === JOURNEYS_FORM_MODAL;
  return { project, isVisible };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  addJourney: (project: IJourney) => dispatch(addProjectAction(project)),
  editJourney: (project: IJourney) => dispatch(editProjectAction(project)),
  setLoading: (isLoading: boolean) => dispatch(setLoadingAction(isLoading)),
  setModal: (isVisible: boolean) => dispatch(
    setModalAction({ name: JOURNEYS_FORM_MODAL, isVisible }),
  ),
  resetProject: () => dispatch(setProject(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JourneysForm);
