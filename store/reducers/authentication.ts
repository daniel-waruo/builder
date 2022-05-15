import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from '../constants/authentication';

import {
  IAuthenticationMutationTypes,
  IAuthenticationState,
} from '../../interfaces/authentication';

export const initialState: IAuthenticationState = {
  token: '',
};

export default function authentication(
  state: IAuthenticationState = initialState,
  action: IAuthenticationMutationTypes,
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
}
