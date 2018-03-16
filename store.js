import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from './reducers/reducers';

const initStore = (initialState) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default initStore;
