import React from 'react';
import HeaderContainer from './header/header_container';
import SessionFormContainer from './session_form/session_form_container';
import {Route} from "react-router-dom";
import AdminPanelContainer from './admin_panel/admin_panel_container';
import LandingPageContainer from './landing_page/landing_page_container';
import CodingTestFormContainer from './coding_test_form/coding_test_form_container';
import ApplicationDisplayContainer from './application_display/application_display_container';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <AdminPanelContainer/>
      <Route exact path="/" component={LandingPageContainer}/>
      <Route path="/login" component={SessionFormContainer}/>
      <Route path="/signup" component={SessionFormContainer}/>
      <Route path="/:appId/test" component={CodingTestFormContainer}/>
      <Route path="/application/:appId" component={ApplicationDisplayContainer} />
    </div>
  );
}

export default App