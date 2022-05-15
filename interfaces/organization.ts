import { Action } from 'redux';
import { IPagination } from './pagination';
import {
  ADD_ORGANIZATION,
  EDIT_ORGANIZATION,
  REMOVE_ORGANIZATION,
  SET_ORGANIZATION,
  SET_ORGANIZATIONS,
} from '../store/constants/organization';

export interface IOrganizationRequest {
    name: string;
}

export interface IOrganizationResponse {
    name: string;
}

export interface IOrganizationsResponse {
    data: IOrganizationResponse[];
    meta: IPagination;
}

export interface ISetOrganizationMutation extends Action {
    readonly type: typeof SET_ORGANIZATION;
    readonly payload: IOrganizationResponse;
}

export interface ISetOrganizationsMutation extends Action {
    readonly type: typeof SET_ORGANIZATIONS;
    readonly payload: IOrganizationsResponse;
}

export interface IRemoveOrganizationMutation extends Action {
    readonly type: typeof REMOVE_ORGANIZATION;
    readonly payload: number;
}

export interface IAddOrganizationMutation extends Action {
    readonly type: typeof ADD_ORGANIZATION;
    readonly payload: IOrganizationResponse;
}

export interface IEditOrganizationMutation extends Action {
    readonly type: typeof EDIT_ORGANIZATION;
    readonly payload: IOrganizationResponse;
}

export interface IOrganizationState {
    organization: IOrganizationResponse;
    organizations: IOrganizationsResponse;
}

export type IOrganizationMutationTypes = ISetOrganizationMutation |
    ISetOrganizationsMutation |
    IRemoveOrganizationMutation |
    IAddOrganizationMutation |
    IEditOrganizationMutation
