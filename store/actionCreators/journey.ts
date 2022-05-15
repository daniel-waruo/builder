/**
 * Journey Action Creator.
 *
 *  This file contains the functions that create the actions that will be
 *  dispatched by redux
 *  These action creators are specific to journey related actions
 */
import { ActionCreator } from 'redux';
import {
  IAddJourneyMutation,
  IEditJourneyMutation,
  IJourneyResponse,
  IJourneysResponse,
  IRemoveJourneyMutation,
  ISetJourneyMutation,
  ISetJourneysMutation,
} from '../../interfaces/journey';
import {
  ADD_JOURNEY, EDIT_JOURNEY, REMOVE_JOURNEY, SET_JOURNEY, SET_JOURNEYS,
} from '../constants/journey';

/**
 * Returns the journey that has been returned from the server
 * @param payload
 */
export const setJourney: ActionCreator<ISetJourneyMutation> = (
  payload: IJourneyResponse,
): ISetJourneyMutation => ({
  type: SET_JOURNEY,
  payload,
});

/**
 * Returns a list journeys that have been returned from the server
 * @param payload
 */
export const setJourneys: ActionCreator<ISetJourneysMutation> = (
  payload: IJourneysResponse,
): ISetJourneysMutation => ({
  type: SET_JOURNEYS,
  payload,
});

/**
 * Sends the journey details needed to create an api
 * @param payload
 */
export const addJourney: ActionCreator<IAddJourneyMutation> = (
  payload: IJourneyResponse,
): IAddJourneyMutation => ({
  type: ADD_JOURNEY,
  payload,
});

/**
 * Edit the journey from the database
 * @param payload
 */
export const editJourney: ActionCreator<IEditJourneyMutation> = (
  payload: IJourneyResponse,
): IEditJourneyMutation => ({
  type: EDIT_JOURNEY,
  payload,
});

/**
 * Remove the journey that was added
 * @param payload
 */
export const removeJourney: ActionCreator<IRemoveJourneyMutation> = (
  payload: number,
): IRemoveJourneyMutation => ({
  type: REMOVE_JOURNEY,
  payload,
});
