/**
 * Authenticate Action Creator.
 *
 *  This file contains the functions that create the actions that will be
 *  dispatched by redux
 *  These action creators are specific to authentication related actions
 */
import { ActionCreator } from 'redux';
import { FORM_REQUEST_STATUS } from '../constants/request';
import { ILoginMutation, ILoginResponse, IRegisterMutation } from '../../interfaces/authentication';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../constants/authentication';
import { IUserResponse } from '../../interfaces/user';

/**
 * Request success status after a request is completed
 * @param payload
 */
export const requestStatus = (payload: { status: boolean }) => ({
  type: FORM_REQUEST_STATUS,
  payload,
});

/**
 * Returns the token and when the login is successful
 * @param payload
 */
export const loginSuccess: ActionCreator<ILoginMutation> = (payload: ILoginResponse) => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * Return the user's details after a successful user creation
 * @param payload
 */
export const registerSuccess: ActionCreator<IRegisterMutation> = (payload: IUserResponse) => ({
  type: REGISTER_SUCCESS,
  payload,
});
