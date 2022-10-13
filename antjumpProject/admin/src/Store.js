import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);

export default store;
