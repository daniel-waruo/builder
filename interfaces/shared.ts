import { Action } from 'redux';
import { SET_LOADING, SET_MODAL } from '../store/constants/shared';

export interface ISharedState {
  isLoading:boolean
  modal:IModal
}

export interface ISETLoadingAction extends Action {
  readonly type: typeof SET_LOADING;
  readonly payload: boolean;
}

export interface IModal {
    name: string;
    isVisible: boolean;
}

export interface ISETModalAction extends Action {
  readonly type: typeof SET_MODAL;
  readonly payload: IModal;
}

export type ISharedActionTypes = ISETLoadingAction | ISETModalAction
