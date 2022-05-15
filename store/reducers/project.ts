import { IProjectState, IProjectMutationTypes } from '../../interfaces/project';
import {
  ADD_EDGE, EDIT_EDGE, REMOVE_EDGE,
  ADD_NODE, EDIT_NODE, REMOVE_NODE,
  ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT,
  SET_ELEMENTS, SET_FLOW,
  SET_PROJECT, SET_PROJECTS,

} from '../constants/project';
import {
  addEdge, addNode, addProject,
  editEdge, editNode, editProject,
  removeEdge, removeNode, removeProject,
} from '../mutations/project';

export const projects: IProjectState = {
  project: null,
  projects: null,
  flow: null,
  elements: null,
};

export default function projectsReducer(
  state: IProjectState = projects,
  action: IProjectMutationTypes,
) {
  switch (action.type) {
    case SET_PROJECT:
      return { ...state, project: action.payload };
    case SET_PROJECTS:
      return { ...state, projects: action.payload };
    case SET_FLOW:
      return { ...state, flow: action.payload };
    case SET_ELEMENTS:
      return { ...state, elements: action.payload };
    case ADD_PROJECT:
      return addProject(state, action);
    case EDIT_PROJECT:
      return editProject(state, action);
    case REMOVE_PROJECT:
      return removeProject(state, action);
    case ADD_NODE:
      return addNode(state, action);
    case EDIT_NODE:
      return editNode(state, action);
    case REMOVE_NODE:
      return removeNode(state, action);
    case ADD_EDGE:
      return addEdge(state, action);
    case EDIT_EDGE:
      return editEdge(state, action);
    case REMOVE_EDGE:
      return removeEdge(state, action);
    default:
      return state;
  }
}
