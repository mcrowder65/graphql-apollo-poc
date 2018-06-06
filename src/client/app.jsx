import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { ApolloProvider } from "react-apollo";

import sagaActions from "actions/sagas/index";
import rootReducer from "reducers/index";
import Router from "router";
import initialState from "reducers/initial-state";
import apolloClient from "graphql/client";
const sagaMiddleware = createSagaMiddleware();
/* global window */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagaActions);
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}
const App = () => (
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Router/>
    </ApolloProvider>
  </Provider>
);

/* global document */
ReactDOM.render(<App/>, document.getElementById("root"));
