import {connect} from "react-redux";
import {indexApplications, updateApplication} from '../../actions/application_actions';

import ApplicationIndex from './applications_index';

const mapStateToProps = (state, ownProps) => {
  let applications = Object.values(state.applications);
  return {
    applications 
  };
}; 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    indexApplications: () => dispatch(indexApplications()),
    updateApplication: (application) => dispatch(updateApplication)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationIndex)