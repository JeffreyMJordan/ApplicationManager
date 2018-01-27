import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ApplicationDisplay from './application_display';

const mapStateToProps = (state, ownProps) => {

  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApplicationDisplay));