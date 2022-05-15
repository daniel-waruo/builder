import { Action } from 'redux';
import { FORGOT_PASSWORD_SUCCESS, LOGIN_SUCCESS, REGISTER_SUCCESS } from '../store/constants/authentication';
import { IUserResponse } from './user';

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export interface ILoginMutation extends Action {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: ILoginResponse
}

export interface IRegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IRegisterMutation extends Action {
    readonly type: typeof REGISTER_SUCCESS;
    readonly payload: IUserResponse;
}

export interface IForgotPasswordRequest {
    email: string;
}

export interface IForgotPasswordMutation extends Action {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
    readonly payload: IUserResponse;
}

export interface IResetPasswordRequest {
    password: string;
    confirmPassword: string;
}

export interface IResetPasswordMutation extends Action {
    readonly type: typeof REGISTER_SUCCESS;
    readonly payload: IUserResponse;
}

export interface IAuthenticationState {
    token: string;
}

export type IAuthenticationMutationTypes = ILoginMutation |
  IRegisterMutation
