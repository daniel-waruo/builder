import { ActionCreator } from 'redux';
import {
  IAddEdgeAction,
  IAddNodeAction,
  IAddProjectAction, IRemoveEdgeAction, IRemoveNodeAction,
  IEditProjectAction,
  IFlow,
  IProject,
  IProjectsResponse,
  IRemoveProjectAction,
  ISetElementsAction,
  ISetFlowAction,
  ISetProjectAction,
  ISetProjectsAction, IEditEdgeAction, IEditNodeAction, INode, IEdge, IElement, IUnSetProjectAction,
} from '../../interfaces/project';
import {
  ADD_EDGE, EDIT_EDGE, REMOVE_EDGE,
  ADD_NODE, EDIT_NODE, REMOVE_NODE,
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT,
  SET_FLOW, SET_ELEMENTS,
  SET_PROJECT, SET_PROJECTS, UN_SET_PROJECT,
} from '../constants/project';

/**
 * Returns the project that has been returned from the server
 * @param payload
 */
export const setProject: ActionCreator<ISetProjectAction> = (
  payload: IProject,
): ISetProjectAction => ({
  type: SET_PROJECT,
  payload,
});
/**
 * Returns the project that has been returned from the server
 * @param payload
 */
export const unSetProject: ActionCreator<IUnSetProjectAction> = (
  payload: undefined,
): IUnSetProjectAction => ({
  type: UN_SET_PROJECT,
  payload,
});

/**
 * Returns a list projects that have been returned from the server
 * @param payload
 */
export const setProjects: ActionCreator<ISetProjectsAction> = (
  payload: IProjectsResponse,
): ISetProjectsAction => ({
  type: SET_PROJECTS,
  payload,
});

/**
 * Add a project after it has been created
 * @param payload
 */
export const addProject: ActionCreator<IAddProjectAction> = (
  payload: IProject,
): IAddProjectAction => ({
  type: ADD_PROJECT,
  payload,
});

/**
 * Edit the project
 * @param payload
 */
export const editProject: ActionCreator<IEditProjectAction> = (
  payload: IProject,
): IEditProjectAction => ({
  type: EDIT_PROJECT,
  payload,
});

/**
 * Remove a project
 * @param payload
 */
export const removeProject: ActionCreator<IRemoveProjectAction> = (
  payload: IProject,
): IRemoveProjectAction => ({
  type: REMOVE_PROJECT,
  payload,
});

/**
 * Set the current flow
 * @param payload
 */
export const setFlow: ActionCreator<ISetFlowAction> = (
  payload: IFlow,
): ISetFlowAction => ({
  type: SET_FLOW,
  payload,
});

/**
 * Set the current elements
 * @param payload
 */
export const setElements: ActionCreator<ISetElementsAction> = (
  payload: IElement[],
): ISetElementsAction => ({
  type: SET_ELEMENTS,
  payload,
});

/**
 *  Add a node to the Database
 * @param payload
 */
export const addNode: ActionCreator<IAddNodeAction> = (
  payload: INode,
): IAddNodeAction => ({
  type: ADD_NODE,
  payload,
});

/**
 *  Update a node
 * @param payload
 */
export const editNode: ActionCreator<IEditNodeAction> = (
  payload: INode,
): IEditNodeAction => ({
  type: EDIT_NODE,
  payload,
});

/**
 * Delete a node
 * @param payload
 */
export const removeNode: ActionCreator<IRemoveNodeAction> = (
  payload: INode,
): IRemoveNodeAction => ({
  type: REMOVE_NODE,
  payload,
});

/**
 * Add an edge
 * @param payload
 */
export const addEdge: ActionCreator<IAddEdgeAction> = (
  payload: IEdge,
): IAddEdgeAction => ({
  type: ADD_EDGE,
  payload,
});

/**
 * Update an edge
 * @param payload
 */
export const editEdge: ActionCreator<IEditEdgeAction> = (
  payload: IEdge,
): IEditEdgeAction => ({
  type: EDIT_EDGE,
  payload,
});

/**
 * Delete an Edge
 * @param payload
 */
export const removeEdge: ActionCreator<IRemoveEdgeAction> = (
  payload: IEdge,
): IRemoveEdgeAction => ({
  type: REMOVE_EDGE,
  payload,
});
