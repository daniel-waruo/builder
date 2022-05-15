import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import $http from '../../utils/api';

import {
  IJourneyActionTypes,
  IJourneyState, IJourneyRequest,
} from '../../interfaces/journey';
import {
  setJourneys,
  setJourney,
  addJourney, editJourney,
} from '../actionCreators/journey';

export function fetchJourneys(
): ThunkAction<Promise<void>, IJourneyState, null, IJourneyActionTypes> {
  return async (
    dispatch: ThunkDispatch<IJourneyState, null, IJourneyActionTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/journeys',
        method: 'GET',
      });
      dispatch(setJourneys(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function fetchJourney(
  payload: number,
): ThunkAction<Promise<void>, IJourneyState, null, IJourneyActionTypes> {
  return async (
    dispatch: ThunkDispatch<IJourneyState, null, IJourneyActionTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/journeys/${payload}`,
        method: 'GET',
      });
      dispatch(setJourney(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function createJourney(
  payload: IJourneyRequest,
): ThunkAction<Promise<void>, IJourneyState, null, IJourneyActionTypes> {
  return async (
    dispatch: ThunkDispatch<IJourneyState, null, IJourneyActionTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: '/journeys',
        method: 'POST',
        data: payload,
      });
      dispatch(addJourney(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function updateJourney(
  payload: { journeyId: number; journey: IJourneyRequest },
): ThunkAction<Promise<void>, IJourneyState, null, IJourneyActionTypes> {
  return async (
    dispatch: ThunkDispatch<IJourneyState, null, IJourneyActionTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/journeys/${payload.journeyId}`,
        method: 'PUT',
        data: payload.journey,
      });
      dispatch(editJourney(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}

export function removeJourney(
  payload: number,
): ThunkAction<Promise<void>, IJourneyState, null, IJourneyActionTypes> {
  return async (
    dispatch: ThunkDispatch<IJourneyState, null, IJourneyActionTypes>,
  ): Promise<void> => {
    try {
      const response = await $http.Authentication({
        url: `/journeys/${payload}`,
        method: 'DELETE',
      });
      dispatch(removeJourney(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      console.log('complete');
    }
  };
}
