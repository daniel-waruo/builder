import { ActionCreator } from 'redux';
import { SET_LOADING, SET_MODAL } from '../constants/shared';
import { IModal, ISETLoadingAction, ISETModalAction } from '../../interfaces/shared';

export const setLoading: ActionCreator<ISETLoadingAction> = (
  payload:boolean,
): ISETLoadingAction => ({
  type: SET_LOADING,
  payload,
});

export const setModal: ActionCreator<ISETModalAction> = (
  payload:IModal,
): ISETModalAction => ({
  type: SET_MODAL,
  payload,
});
