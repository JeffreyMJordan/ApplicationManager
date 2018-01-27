import {connect} from "react-redux";
import ApplicationForm from './application_form';
import {createApplication, updateApplication, showApplicationByUserId} from '../../actions/application_actions';

const mapStateToProps = (state, ownProps) => {
  let currentApplication = state.applications[state.session.currentUser.id];
  let update = currentApplication;
  let userId = state.session.currentUser.id;
  console.log(currentApplication);
  return {
    currentApplication,
    update,
    userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createApplication: (application) => dispatch(createApplication(application)),
    updateApplication: (application) => dispatch(updateApplication(application)),
    showApplicationByUserId: (userId) => dispatch(showApplicationByUserId(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);