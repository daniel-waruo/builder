import { ISETLoadingAction, ISETModalAction, ISharedState } from '../../interfaces/shared';

export const setModal = (
  state:ISharedState, action:ISETModalAction,
) => ({ ...state, modal: action.payload });

export const setLoading = (
  state:ISharedState, action:ISETLoadingAction,
) => ({ ...state, isLoading: action.payload });
