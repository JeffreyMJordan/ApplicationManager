import * as ApplicationAPIUtil from '../util/application_api_util';

export const RECEIVE_APPLICATION = "RECEIVE_APPLICATION";
export const RECEIVE_APPLICATIONS = "RECEIVE_APPLICATIONS";

export const receiveApplication = (application) => {
  console.log("here");
  console.log(application);
  return {
    type: RECEIVE_APPLICATION,
    application
  };
};

export const receiveApplications = (applications) => {
  return {
    type: RECEIVE_APPLICATIONS,
    applications
  };
};

export const indexApplications = () => (dispatch) => {
  return ApplicationAPIUtil.indexApplications()
    .then((res) => dispatch(receiveApplications(res)));
};

export const showApplication = (id) => (dispatch) => {
  return ApplicationAPIUtil.showApplication(id)
    .then((res) => dispatch(receiveApplication(res)));
};

export const showApplicationByUserId = (userId) => (dispatch) => {
  return ApplicationAPIUtil.showApplicationByUserId(userId)
    .then((res) => dispatch(receiveApplication(res)));
};

export const updateApplication = (application) => (dispatch) => {
  return ApplicationAPIUtil.updateApplication(application)
    .then((res) => dispatch(receiveApplication(res)));
};

export const createApplication = (application) => (dispatch) => {
  return ApplicationAPIUtil.createApplication(application)
    .then((res) => dispatch(receiveApplication(res)));
};