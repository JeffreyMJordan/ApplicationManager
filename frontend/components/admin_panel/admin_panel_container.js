import {connect} from "react-redux";
import AdminPanel from './admin_panel';

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.session.currentUser.admin
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)