import { SET_LOADING, SET_MODAL } from '../constants/shared';
import { ISharedActionTypes, ISharedState } from '../../interfaces/shared';
import { setLoading, setModal } from '../mutations/shared';

export const sharedState: ISharedState = {
  isLoading: false,
  modal: {
    name: 'main',
    isVisible: false,
  },
};

export default function shared(
  state: ISharedState = sharedState,
  action: ISharedActionTypes,
) {
  switch (action.type) {
    case SET_LOADING:
      return setLoading(state, action);
    case SET_MODAL:
      return setModal(state, action);
    default:
      return state;
  }
}
