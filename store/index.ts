import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { IRootState } from '../interfaces/root';

const makeStore: MakeStore<Store> = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default createWrapper<Store<IRootState>>(makeStore, { debug: true });
