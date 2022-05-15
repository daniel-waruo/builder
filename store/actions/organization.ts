import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import $http from '../../utils/api';

import {
  IOrganizationMutationTypes,
  IOrganizationState, IOrganizationRequest,
} from '../../interfaces/organization';
import {
  setOrganizations,
  setOrganization,
  addOrganization, editOrganization,
} from '../actionCreators/organization';

export function fetchOrganizations(
): ThunkAction<Promise<void>, IOrganizationState, null, IOrganizationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IOrganizationState, null, IOrganizationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/organizations',
        method: 'GET',
      });
      dispatch(setOrganizations(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function fetchOrganization(
  payload: number,
): ThunkAction<Promise<void>, IOrganizationState, null, IOrganizationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IOrganizationState, null, IOrganizationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/organizations/${payload}`,
        method: 'GET',
      });
      dispatch(setOrganization(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function createOrganization(
  payload: IOrganizationRequest,
): ThunkAction<Promise<void>, IOrganizationState, null, IOrganizationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IOrganizationState, null, IOrganizationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/organizations',
        method: 'POST',
        data: payload,
      });
      dispatch(addOrganization(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function updateOrganization(
  payload: { organizationId: number; organization: IOrganizationRequest },
): ThunkAction<Promise<void>, IOrganizationState, null, IOrganizationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IOrganizationState, null, IOrganizationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/organizations/${payload.organizationId}`,
        method: 'PUT',
        data: payload.organization,
      });
      dispatch(editOrganization(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function removeOrganization(
  payload: number,
): ThunkAction<Promise<void>, IOrganizationState, null, IOrganizationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IOrganizationState, null, IOrganizationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/organizations/${payload}`,
        method: 'DELETE',
      });
      dispatch(removeOrganization(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}
