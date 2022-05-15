import { Action } from 'redux';
import { IPagination } from './pagination';
import {
  ADD_JOURNEY,
  EDIT_JOURNEY,
  REMOVE_JOURNEY,
  SET_JOURNEY,
  SET_JOURNEYS,
} from '../store/constants/journey';

export interface IJourneyRequest {
    name: string;
}

export interface IJourneyResponse {
    name: string;
}

export interface IJourneysResponse {
    data: IJourneyResponse[];
    meta: IPagination;
}

export interface ISetJourneyMutation extends Action {
    readonly type: typeof SET_JOURNEY;
    readonly payload: IJourneyResponse;
}

export interface ISetJourneysMutation extends Action {
    readonly type: typeof SET_JOURNEYS;
    readonly payload: IJourneysResponse;
}

export interface IRemoveJourneyMutation extends Action {
    readonly type: typeof REMOVE_JOURNEY;
    readonly payload: number;
}

export interface IAddJourneyMutation extends Action {
    readonly type: typeof ADD_JOURNEY;
    readonly payload: IJourneyResponse;
}

export interface IEditJourneyMutation extends Action {
    readonly type: typeof EDIT_JOURNEY;
    readonly payload: IJourneyResponse;
}

export interface IJourneyState {
    journey: IJourneyResponse;
    journeys: IJourneysResponse;
}

export type IJourneyActionTypes = ISetJourneyMutation |
    ISetJourneysMutation |
    IRemoveJourneyMutation |
    IAddJourneyMutation |
    IEditJourneyMutation
