/**
 * Projects Mutations.
 *
 * This file contains mutation for all project related projects
 * A mutation inputs a state and returns the updated state
 *
 */
import {
  IAddNodeAction, IEditNodeAction, IRemoveNodeAction,
  IAddEdgeAction, IEditEdgeAction, IRemoveEdgeAction,
  IProjectState, IAddProjectAction, IEditProjectAction, IRemoveProjectAction,
} from '../../interfaces/project';

/// /////////////////////////////////////////
// PROJECT MUTATIONS
/// /////////////////////////////////////////

export const addProject = (state:IProjectState, action:IAddProjectAction) => {
  const data = state.projects?.data || [];
  return ({
    ...state,
    projects: {
      data: [...data, action.payload],
      meta: state.projects?.meta,
    },
  });
};

export const editProject = (state:IProjectState, action:IEditProjectAction) => {
  let data = state.projects?.data || [];
  // remove the project from projects
  data = data.filter(
    (project) => project.id !== action.payload.id,
  );
  return ({
    ...state,
    projects: {
      // return with the data ommitted and added the new payload
      data: [...data, action.payload],
      meta: state.projects?.meta,
    },
  });
};

export const removeProject = (state:IProjectState, action:IRemoveProjectAction) => {
  let data = state.projects?.data || [];
  // remove the project from projects
  data = data.filter(
    (project) => project.id !== action.payload.id,
  );
  return ({
    ...state,
    projects: {
      data: [...data],
      meta: state.projects?.meta,
    },
  });
};

/// /////////////////////////////////////////
// NODE MUTATIONS
/// /////////////////////////////////////////

export const addNode = (state:IProjectState, action:IAddNodeAction) => {
  const elements = state.elements || [];
  return ({ ...state, elements: [...elements, action.payload] });
};

export const editNode = (state:IProjectState, action:IEditNodeAction) => {
  const elements = state.elements || [];
  const node = action.payload;
  // remove the node to be added
  const updatedElements = elements.filter(
    ({ id: elementId }) => elementId !== node.id,
  );
  return { ...state, elements: [...updatedElements, node] };
};

export const removeNode = (state:IProjectState, action:IRemoveNodeAction) => {
  let elements = state.elements || [];
  const node = action.payload;
  console.log(elements);
  // remove the node to be added and all the edges associated with it
  elements = elements.filter(
    (element) => (
      element.id !== node.id
      && element.source !== node.id
      && element.target !== node.id
    ),
  );
  console.log(elements);
  return { ...state, elements: [...elements] };
};

/// /////////////////////////////////////////
// EDGE MUTATIONS
/// /////////////////////////////////////////

export const addEdge = (state:IProjectState, action:IAddEdgeAction) => {
  const elements = state.elements || [];
  return { ...state, elements: [...elements, action.payload] };
};

export const editEdge = (state:IProjectState, action:IEditEdgeAction) => {
  const elements = state.elements?.filter(
    ({ id }) => id !== action.payload.id,
  ) || [];
  return { ...state, elements: [...elements, action.payload] };
};

export const removeEdge = (state:IProjectState, action:IRemoveEdgeAction) => {
  const elements = state.elements?.filter(
    ({ id }) => id !== action.payload.id,
  ) || [];
  return { ...state, elements: [...elements] };
};
