import React, { useContext, useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { FlowElement } from 'react-flow-renderer';
import { FlowContext } from './FlowSection';

type AddStepInputProps = {
  isVisible: boolean
  // eslint-disable-next-line no-unused-vars
  setVisible: (visibility: boolean) => void,
  edge: FlowElement
}

const EdgeModal = ({
  isVisible, setVisible, edge,
}: AddStepInputProps) => {
  // state for loading when we sent the request to the server
  const [confirmLoading, setConfirmLoading] = useState(false);
  // state fot the web hook url and edge key word
  const [keyWord, setKeyWord] = useState(edge.data.keyWord);
  const { updateEdge } = useContext(FlowContext);
  // raise an error if the context is not a parent
  if (!updateEdge) throw Error('Flow Context not in parents');
  return (
    <>
      <Modal
        title="Edge Configuration"
        visible={isVisible}
        footer={null}
        onCancel={() => setVisible(false)}
        confirmLoading={confirmLoading}
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          setConfirmLoading(true);
          // @ts-ignore
          updateEdge({ ...edge, data: { keyWord } });
          setVisible(false);
          setConfirmLoading(false);
        }}
        >
          <p>Edge Keyword</p>
          <Input
            required
            value={keyWord}
            onChange={({ target: { value } }) => {
              setKeyWord(value);
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <Button size="large" type="primary" htmlType="submit" style={{ marginTop: '1rem' }}>
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EdgeModal;
