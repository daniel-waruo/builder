import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setLoading as setLoadingCreator, setModal as setModalCreator } from '../actionCreators/shared';
import { IModal } from '../../interfaces/shared';
import { IRootActionTypes, IRootState } from '../../interfaces/root';

export function setLoading(
  isLoading:boolean,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>): void => {
    dispatch(setLoadingCreator(isLoading));
  };
}

export function setModal(
  modal:IModal,
): ThunkAction<void, IRootState, null, IRootActionTypes> {
  return (dispatch: ThunkDispatch<IRootState, null, IRootActionTypes>): void => {
    dispatch(setModalCreator(modal));
  };
}
