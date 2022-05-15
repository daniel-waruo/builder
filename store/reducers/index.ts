import { combineReducers } from 'redux';

import authentication from './authentication';
import journey from './journey';
import organization from './organization';
import projectReducer from './project';
import shared from './shared';

const rootReducer = combineReducers({
  authentication,
  journeys: journey,
  organizations: organization,
  projects: projectReducer,
  shared,
});

export default rootReducer;
