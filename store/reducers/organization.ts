import {
  IOrganizationState,
  IOrganizationMutationTypes,
} from '../../interfaces/organization';
import {
  ADD_ORGANIZATION,
  EDIT_ORGANIZATION,
  REMOVE_ORGANIZATION,
  SET_ORGANIZATION,
  SET_ORGANIZATIONS,
} from '../constants/organization';

export const initialState: IOrganizationState = {
  organization: {
    name: '',
  },

  organizations: {
    data: [],
    meta: {
      page: 0,
      limit: 0,
    },
  },
};

export default function organization(
  state: IOrganizationState = initialState,
  action: IOrganizationMutationTypes,
) {
  switch (action.type) {
    case SET_ORGANIZATION:
      return { ...state, organization: action.payload };

    case SET_ORGANIZATIONS:
      return { ...state, organizations: action.payload };

    case ADD_ORGANIZATION:
      return { ...state, organizations: [...state.organizations.data, action.payload] };

    case EDIT_ORGANIZATION:
      return state;
    case REMOVE_ORGANIZATION:
      return state;
    default:
      return state;
  }
}
