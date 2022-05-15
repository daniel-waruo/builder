import React, { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Form, Input, Card, Tooltip, Empty,
} from 'antd';
import { FlowElement, Handle, Position } from 'react-flow-renderer';
import { DeleteOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { FlowContext } from '../FlowSection';

const { TextArea } = Input;

type TextNodeProps = {
  id: string,
  data: {
    text: string
  },
} | FlowElement

const TextNode = ({ id, data: { text } }: TextNodeProps) => {
  const [edit, setEdit] = useState(false);
  // use flow context to remove nodes
  const { removeNode, updateNode, getElement } = useContext(FlowContext);
  if (!removeNode || !updateNode || !getElement) {
    throw Error('Undefined Flow Context');
  }
  const handleStyle = { width: 15, height: 15, zIndex: 100 };
  return (
    <>
      <Handle style={handleStyle} id={id} type="target" position={Position.Top} />
      <Card
        actions={[
          edit
            ? (
              <Tooltip title="Preview" key="editNode" placement="bottom">
                <EyeOutlined onClick={() => setEdit(false)} />
              </Tooltip>
            )
            : (
              <Tooltip title="Edit" key="editNode" placement="bottom">
                <EditOutlined onClick={() => setEdit(true)} />
              </Tooltip>
            ),
          <Tooltip title="Delete" key="deleteNode" placement="bottom">
            <DeleteOutlined onClick={() => removeNode(getElement(id))} />
          </Tooltip>,
        ]}
      >
        {
          // eslint-disable-next-line no-nested-ternary
        edit
          ? (
            <Form.Item>
              <TextArea
                cols={50}
                defaultValue={text}
                onChange={({ target: { value } }) => {
                  updateNode({ ...getElement(id), data: { text: value } });
                }}
                size="large"
                rows={4}
              />
            </Form.Item>
          )
          : (
            text
              ? (
                <ReactMarkdown className="text">
                  {text}
                </ReactMarkdown>
              )
              : <Empty />
          )
      }

      </Card>
      <Handle id={id} style={handleStyle} type="source" position={Position.Bottom} />
    </>
  );
};
export default TextNode;
