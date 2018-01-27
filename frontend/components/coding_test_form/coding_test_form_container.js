import {connect} from "react-redux";
import CodingTestForm from './coding_test_form';
import {createTest} from "../../actions/test_actions";
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let appId = ownProps.match.params.appId; 
  return {
    appId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTest: (test) => dispatch(createTest(test))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CodingTestForm));