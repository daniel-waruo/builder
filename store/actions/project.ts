import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { FlowElement } from 'react-flow-renderer';
import $http from '../../utils/api';
import {
  ISetProjectsAction,
  IProjectMutationTypes,
  IProject, IFlow, IAddNodeRequest, IAddEdgeRequest,
} from '../../interfaces/project';
import {
  setProjects, setProject,
  setFlow, setElements,
  addProject as addProjectCreator,
  editProject as editProjectCreator,
  removeProject as removeProjectCreator,
  addNode as addNodeCreator, editNode as editNodeCreator, removeNode as removeNodeCreator,
  addEdge as addEdgeCreator, editEdge as editEdgeCreator, removeEdge as removeEdgeCreator,
} from '../actionCreators/project';
import { setLoading } from '../actionCreators/shared';
import { IRootActionTypes, IRootState } from '../../interfaces/root';

export function fetchProjects(): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ): void => {
    $http.Api.get('/projects').then(
      (response) => {
        dispatch(setProjects(response.data.data));
      },
    ).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function fetchProject(
  projectId: number,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ): void => {
    $http.Api({
      url: `/projects/${projectId}`,
      method: 'GET',
    }).then(
      (response) => {
        dispatch(setProject(response.data.data));
      },
    ).catch(
      (error) => {
        console.log(error);
      },
    );
  };
}

export function addProject(
  project: IProject,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ): void => {
    dispatch(setLoading({ isLoading: true }));
    $http.Api({
      url: '/projects',
      method: 'POST',
      data: project,
    }).then(
      (response) => {
        dispatch(addProjectCreator(response.data.data));
      },
    );
  };
}

export function editProject(
  payload: IProject,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ):void => {
    dispatch(editProjectCreator(payload));
    $http.Api({
      url: `/projects/${payload.id}`,
      method: 'PUT',
      data: payload,
    }).then(() => {});
  };
}

export function removeProject(
  project: IProject,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ): void => {
    dispatch(removeProjectCreator(project));
    $http.Api({
      url: `/projects/${project.id}`,
      method: 'DELETE',
    }).then(() => {});
  };
}

export function fetchFlow(
  payload: number,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>,
  ): void => {
    $http.Api.get(`/projects/${payload}/flow`).then(
      (response) => {
        dispatch(setFlow(response.data.data));
      },
    ).catch(
      (error) => {
        console.log(error);
      },
    );
  };
}

export function updateFlow(
  projectId: number,
  flow:IFlow,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    dispatch(setFlow(flow));
    $http.Api.put(`/projects/${projectId}/flow`, flow);
  };
}

export function fetchElements(
  projectId:number,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    $http.Api.get(`/projects/${projectId}/flow/elements`).then(
      (response) => {
        dispatch(setElements(response.data.data));
      },
    ).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function addNode(
  node:IAddNodeRequest,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    $http.Api.post('/nodes', node).then(
      (response) => {
        // append "node-" before the node id
        const responseNode = response.data.data;
        dispatch(addNodeCreator({ ...responseNode, id: `node-${responseNode.id}` }));
      },
    ).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function editNode(
  node:FlowElement,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    dispatch(editNodeCreator(node));
    $http.Api.put(`/nodes/${node.id.split('-')[1]}`, node).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function removeNode(
  node:FlowElement,
): ThunkAction<void, IRootState, null, IProjectMutationTypes> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    dispatch(removeNodeCreator(node));
    $http.Api.delete(`/nodes/${node.id.split('-')[1]}`).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function addEdge(
  edge:IAddEdgeRequest,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    $http.Api.post('/edges', edge).then(
      (response) => {
        // GET the data from the response
        const {
          id, type, data, sourceId, targetId,
        } = response.data.data;
        // send the newly created edge to the state
        dispatch(addEdgeCreator({
          id: `edge-${id}`,
          type,
          data,
          source: `node-${sourceId}`,
          target: `node-${targetId}`,
        }));
      },
    ).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function editEdge(
  edge:FlowElement,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    dispatch(editEdgeCreator(edge));
    console.log(edge);
    $http.Api.put(`/edges/${edge.id.split('-')[1]}`, edge).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}

export function removeEdge(
  edge:FlowElement,
): ThunkAction<void, IRootState, null, ISetProjectsAction> {
  return (
    dispatch: ThunkDispatch<IRootState, null, IProjectMutationTypes>,
  ): void => {
    dispatch(removeEdgeCreator(edge));
    $http.Api.delete(`/edges/${edge.id.split('-')[1]}`).catch(
      (error) => {
        console.error(error);
      },
    );
  };
}
