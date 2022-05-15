import {
  IAuthenticationState,
  ILoginMutation,
  IRegisterMutation,
} from './authentication';
import { IOrganizationState, IOrganizationMutationTypes } from './organization';
import { IProjectState, IProjectMutationTypes } from './project';
import { ISharedActionTypes, ISharedState } from './shared';

export interface IRootState {
  authentication: IAuthenticationState,
  organizations: IOrganizationState,
  projects:IProjectState,
  shared:ISharedState
}

export type IRootActionTypes = ILoginMutation |
  IRegisterMutation |
  IOrganizationMutationTypes |
  ISharedActionTypes |
  IProjectMutationTypes
