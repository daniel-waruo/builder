/**
 * Organization Action Creators.
 *
 *  This file contains the functions that create the actions that will be
 *  dispatched by redux
 *  These action creators are specific to organization related actions
 */
import { ActionCreator } from 'redux';
import {
  IAddOrganizationMutation,
  IEditOrganizationMutation,
  IOrganizationResponse,
  IOrganizationsResponse,
  IRemoveOrganizationMutation,
  ISetOrganizationMutation,
  ISetOrganizationsMutation,
} from '../../interfaces/organization';
import {
  ADD_ORGANIZATION,
  EDIT_ORGANIZATION,
  REMOVE_ORGANIZATION,
  SET_ORGANIZATION,
  SET_ORGANIZATIONS,
} from '../constants/organization';

/**
 * Returns the organization that has been returned from the server
 * @param payload
 */
export const setOrganization: ActionCreator<ISetOrganizationMutation> = (
  payload: IOrganizationResponse,
): ISetOrganizationMutation => ({
  type: SET_ORGANIZATION,
  payload,
});

/**
 * Returns a list organizations that have been returned from the server
 * @param payload
 */
export const setOrganizations: ActionCreator<ISetOrganizationsMutation> = (
  payload: IOrganizationsResponse,
): ISetOrganizationsMutation => ({
  type: SET_ORGANIZATIONS,
  payload,
});

/**
 * Sends the organization details needed to create an api
 * @param payload
 */
export const addOrganization: ActionCreator<IAddOrganizationMutation> = (
  payload: IOrganizationResponse,
): IAddOrganizationMutation => ({
  type: ADD_ORGANIZATION,
  payload,
});

/**
 * Edit the organization in the database
 * @param payload
 */
export const editOrganization: ActionCreator<IEditOrganizationMutation> = (
  payload: IOrganizationResponse,
): IEditOrganizationMutation => ({
  type: EDIT_ORGANIZATION,
  payload,
});

/**
 * Remove the organization from the database
 * @param payload
 */
export const removeOrganization: ActionCreator<IRemoveOrganizationMutation> = (
  payload: number,
): IRemoveOrganizationMutation => ({
  type: REMOVE_ORGANIZATION,
  payload,
});
