import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import $http from '../../utils/api';

import {
  IAuthenticationMutationTypes,
  IAuthenticationState,
  ILoginRequest,
  IRegisterRequest,
} from '../../interfaces/authentication';
import { loginSuccess, registerSuccess } from '../actionCreators/authentication';

export function login(
  payload: ILoginRequest,
): ThunkAction<Promise<void>, IAuthenticationState, null, IAuthenticationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IAuthenticationState, null, IAuthenticationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/auth/login',
        data: payload,
        method: 'POST',
      });
      const { token } = response.data;
      localStorage.setItem('access-token', token);
      dispatch(loginSuccess(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function register(
  payload: IRegisterRequest,
): ThunkAction<Promise<void>, IAuthenticationState, null, IAuthenticationMutationTypes> {
  return async (
    dispatch: ThunkDispatch<IAuthenticationState, null, IAuthenticationMutationTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/auth/register',
        data: payload,
        method: 'POST',
      });
      dispatch(registerSuccess(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}
