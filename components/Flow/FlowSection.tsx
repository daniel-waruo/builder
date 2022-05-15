import React, { FC, useEffect } from 'react';
import {
  Button, Col, Layout, Row, Space,
} from 'antd';
import ReactFlow, {
  Background, BackgroundVariant, Controls, MiniMap, Edge, Connection,
} from 'react-flow-renderer';
import { useRouter } from 'next/router';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import {
  FlowMenu, NodeSelector, StartNode, TextNode,
} from '../index';
import BotEdge from './Edges/BotEdge';
import {
  IAddEdgeRequest, IAddNodeRequest, IEdge, IElement, IFlow, INode,
} from '../../interfaces/project';
import { IRootActionTypes, IRootState } from '../../interfaces/root';
import {
  fetchFlow, updateFlow, fetchElements,
  addNode, editNode, removeNode,
  addEdge, editEdge, removeEdge,
} from '../../store/actions/project';
import PageSpinner from '../PageSpinner';

type FlowContextData = {
  // eslint-disable-next-line no-unused-vars
  addNode?: (selection: string) => void,
  // eslint-disable-next-line no-unused-vars
  removeNode?: (node: IElement) => void,
  // eslint-disable-next-line no-unused-vars
  updateNode?: (node: IElement | any) => void,
  // eslint-disable-next-line no-unused-vars
  getElement?: (nodeId: string) => IElement,
  // eslint-disable-next-line no-unused-vars
  addEdge?: (edge: IAddEdgeRequest) => void
  // eslint-disable-next-line no-unused-vars
  removeEdge?: (edge: IElement) => void
  // eslint-disable-next-line no-unused-vars
  updateEdge?: (edge: IElement) => void
}

const defaultValue: FlowContextData = {};

export const FlowContext = React.createContext(defaultValue);

type BotFlowSectionProps = {
  flow: IFlow | null,
  elements: IElement[] | null,
  // eslint-disable-next-line no-unused-vars
  loadFlow: (projectId: number) => void
  // eslint-disable-next-line no-unused-vars
  loadElements: (projectId: number) => void
  // eslint-disable-next-line no-unused-vars
  editFlow: (projectId: number, flow: IFlow) => void
  // eslint-disable-next-line no-unused-vars
  addNode: (node: IAddNodeRequest) => void
  // eslint-disable-next-line no-unused-vars
  updateNode: (node: INode) => void
  // eslint-disable-next-line no-unused-vars
  deleteNode: (node: INode) => void
  // eslint-disable-next-line no-unused-vars
  addEdge: (edge: IAddEdgeRequest) => void
  // eslint-disable-next-line no-unused-vars
  updateEdge: (edge: IEdge) => void
  // eslint-disable-next-line no-unused-vars
  deleteEdge: (edge: IEdge) => void
}

const FlowSection: FC<BotFlowSectionProps> = ({
  flow, loadFlow, editFlow,
  loadElements, elements,
  addNode, updateNode, deleteNode,
  addEdge, updateEdge, deleteEdge,
}: BotFlowSectionProps) => {
  const { query: { slug } } = useRouter();
  const projectId = Number(slug);
  useEffect(() => {
    loadFlow(projectId);
    loadElements(projectId);
  }, [projectId]);
  if (!flow || !elements) {
    return <PageSpinner />;
  }
  // eslint-disable-next-line no-param-reassign
  flow.position = flow.position || { x: 0, y: 0 };

  const context: FlowContextData = {
    addNode: (selection: string) => {
      switch (selection) {
        case 'text':
          addNode({
            name: 'New Node',
            type: selection,
            data: {
              text: '',
            },
            position: { x: 600, y: 75 },
            projectId,
          });
          break;
        default:
          break;
      }
    },
    removeNode: (node: INode) => {
      deleteNode(node);
    },
    updateNode: (node: INode) => {
      updateNode(node);
    },
    getElement: (nodeId: string) => {
      const node = elements.find(({ id }) => nodeId === id);
      if (!node) {
        throw Error('Node with above id not found');
      }
      return node;
    },
    addEdge: (edge) => {
      addEdge(edge);
    },
    removeEdge: (edge) => {
      deleteEdge(edge);
    },
    updateEdge: (edge) => {
      updateEdge(edge);
    },
  };
  return (
    <FlowContext.Provider value={context}>
      <Row gutter={[16, 16]}>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <Space>
            <Button type="primary">Create Journey</Button>
            <NodeSelector />
          </Space>
          <FlowMenu />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Layout style={{
            padding: '0 24px 24px',
            minWidth: '100%',
            overflow: 'auto',
          }}
          >
            <ReactFlow
              style={{ height: 500 }}
              deleteKeyCode={46}
              defaultZoom={flow.zoom}
              defaultPosition={[flow.position?.x, flow.position.y]}
              onConnect={(connectedEdge: Edge | Connection) => {
                // get the source
                addEdge({
                  type: 'default',
                  data: {},
                  sourceId: Number(connectedEdge.source?.split('-')[1]),
                  targetId: Number(connectedEdge.target?.split('-')[1]),
                  projectId,
                });
              }}
              elements={elements}
              nodeTypes={{
                start: StartNode,
                text: TextNode,
              }}
              edgeTypes={{
                default: BotEdge,
              }}
              panOnScrollSpeed={flow.zoom}
              onNodeDragStop={(e, node) => {
                if (context.getElement) {
                  const updatedNode = context.getElement(node.id);
                  if (updatedNode) {
                    updateNode({
                      ...updatedNode,
                      position: node.position,
                    });
                  }
                }
              }}
              onMoveEnd={
                (flowTransform) => {
                  if (flowTransform) {
                    editFlow(projectId, {
                      ...flow,
                      zoom: flowTransform.zoom,
                      position: {
                        x: flowTransform.x,
                        y: flowTransform.y,
                      },
                    });
                  }
                }
              }
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={12}
                size={1}
              />
              <MiniMap
                nodeColor={(node) => {
                  switch (node.type) {
                    case 'start':
                      return '#f3c100';
                    case 'text':
                      return '#00baf3';
                    default:
                      return '#eee';
                  }
                }}
                nodeStrokeWidth={3}
              />
              <Controls />
            </ReactFlow>
          </Layout>
        </Col>
      </Row>
    </FlowContext.Provider>
  );
};
const mapStateToProps = (state: IRootState) => ({
  flow: state.projects.flow,
  elements: state.projects.elements,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
) => ({
  loadFlow: (projectId: number) => {
    dispatch(fetchFlow(projectId));
  },
  loadElements: (projectId: number) => {
    dispatch(fetchElements(projectId));
  },
  editFlow: (projectId: number, flow: IFlow) => {
    dispatch(updateFlow(projectId, flow));
  },
  addNode: (node: IAddNodeRequest) => {
    dispatch(addNode(node));
  },
  updateNode: (node: INode) => {
    dispatch(editNode(node));
  },
  deleteNode: (node: INode) => {
    dispatch(removeNode(node));
  },
  addEdge: (node: IAddEdgeRequest) => {
    dispatch(addEdge(node));
  },
  updateEdge: (node: IEdge) => {
    dispatch(editEdge(node));
  },
  deleteEdge: (node: IEdge) => {
    dispatch(removeEdge(node));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FlowSection);
