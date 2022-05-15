import {
  IJourneyState,
  IJourneyActionTypes,
} from '../../interfaces/journey';
import {
  ADD_JOURNEY,
  EDIT_JOURNEY,
  REMOVE_JOURNEY,
  SET_JOURNEY,
  SET_JOURNEYS,
} from '../constants/journey';

export const initialState: IJourneyState = {
  journey: {
    name: '',
  },
  journeys: {
    data: [],
    meta: {
      page: 0,
      limit: 0,
    },
  },
};

export default function journey(
  state: IJourneyState = initialState,
  action: IJourneyActionTypes,
) {
  switch (action.type) {
    case SET_JOURNEY:
      return { ...state, journey: action.payload };

    case SET_JOURNEYS:
      return { ...state, journeys: action.payload };

    case ADD_JOURNEY:
      return { ...state, journeys: [...state.journeys.data, action.payload] };

    case EDIT_JOURNEY:
      return state;
    case REMOVE_JOURNEY:
      return state;
    default:
      return state;
  }
}
