import { Action } from 'redux';
import { IPagination } from './pagination';
import {
  ADD_EDGE, EDIT_EDGE, REMOVE_EDGE,
  ADD_NODE, EDIT_NODE, REMOVE_NODE,
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT,
  SET_ELEMENTS, SET_FLOW,
  SET_PROJECT, SET_PROJECTS, UN_SET_PROJECT,
} from '../store/constants/project';

export interface IProjectRequest {
  name: string;
}

export interface IProjectResponse {
  data: IProject
}

export interface IProject {
  id: number;
  name: string;
  description: string;
}

export interface IProjectsResponse {
  data: IProject[];
  meta: IPagination;
}

export interface ISetProjectAction extends Action {
  readonly type: typeof SET_PROJECT;
  readonly payload: IProject | null;
}

export interface IUnSetProjectAction extends Action {
  readonly type: typeof UN_SET_PROJECT;
  readonly payload: undefined;
}

export interface ISetProjectsAction extends Action {
  readonly type: typeof SET_PROJECTS;
  readonly payload: IProjectsResponse;
}

export interface IRemoveProjectAction extends Action {
  readonly type: typeof REMOVE_PROJECT;
  readonly payload: IProject;
}

export interface IAddProjectAction extends Action {
  readonly type: typeof ADD_PROJECT;
  readonly payload: IProject;
}

export interface IEditProjectAction extends Action {
  readonly type: typeof EDIT_PROJECT;
  readonly payload: IProject;
}

export interface IFlow {
  id: number
  zoom: number
  projectId: number
  position: {
    x: number
    y: number
  }
}

export interface IFlowResponse {
  data: IFlow
}

export interface ISetFlowAction extends Action {
  readonly type: typeof SET_FLOW;
  readonly payload: IFlow;
}

export interface IAddNodeRequest {
  name: string
  type: string
  data: {}
  position: {
    x: number,
    y: number
  }
  projectId: number
}

export interface INode {
  id: string
  name: string
  type: string
  data: {}
  position: {
    x: number,
    y: number
  }
  projectId: number
}

export interface IAddNodeAction extends Action {
  readonly type: typeof ADD_NODE;
  readonly payload: INode;
}

export interface IEditNodeAction extends Action {
  readonly type: typeof EDIT_NODE;
  readonly payload: INode;
}

export interface IRemoveNodeAction extends Action {
  readonly type: typeof REMOVE_NODE;
  readonly payload: INode;
}

export interface IAddEdgeRequest {
  id?: string
  type: string
  data: {}
  sourceId: number
  targetId: number
  projectId: number
}

export interface IEdge {
  id: string
  type: string
  data: {}
  source: string
  target: string
  projectId: number
}

export interface IAddEdgeAction extends Action {
  readonly type: typeof ADD_EDGE;
  readonly payload: IEdge;
}

export interface IEditEdgeAction extends Action {
  readonly type: typeof EDIT_EDGE;
  readonly payload: IEdge;
}

export interface IRemoveEdgeAction extends Action {
  readonly type: typeof REMOVE_EDGE;
  readonly payload: IEdge;
}

export interface IJourney {
  id: number
  name: string
  description: string
  zoom:string
  flowPosition: { x: number, y: number }
}

export interface IJourneyNode {
  id: string
  type: string
  position: { x: number, y: number }
  projectId: number
}

export type IElement = IEdge & INode & IJourneyNode

export interface ISetElementsAction extends Action {
  readonly type: typeof SET_ELEMENTS;
  readonly payload: IElement[];
}

export interface IProjectState {
  project: IProject | null;
  projects: IProjectsResponse | null;
  flow: IFlow | null;
  elements: IElement[] | null;
}

export type IProjectMutationTypes = ISetProjectAction |
  ISetProjectsAction |
  IRemoveProjectAction |
  IAddProjectAction |
  IEditProjectAction |
  ISetFlowAction |
  ISetElementsAction |
  IAddNodeAction |
  IEditNodeAction |
  IRemoveNodeAction |
  IAddEdgeAction |
  IRemoveEdgeAction |
  IEditEdgeAction
