import {connect} from 'react-redux';
import LandingPage from './landing_page';

const mapStateToProps = (state, ownProps) => {
  return {
    admin: state.session.currentUser.admin,
    loggedIn: state.session.currentUser.id
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);