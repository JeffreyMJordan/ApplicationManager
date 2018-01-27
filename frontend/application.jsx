import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as ApplicationActions from './actions/application_actions';
import * as TestActions from './actions/test_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.indexApplications = ApplicationActions.indexApplications
  window.showApplication = ApplicationActions.showApplication
  window.showApplicationByUserId = ApplicationActions.showApplicationByUserId
  window.updateApplication = ApplicationActions.updateApplication 
  window.createApplication = ApplicationActions.createApplication

  window.createTest = TestActions.createTest
  window.showTest = TestActions.showTest
  
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});