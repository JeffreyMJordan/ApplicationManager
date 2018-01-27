import React from "react";
import ApplicationFormContainer from '../application_form/application_form_container';
import ApplicationsIndexContainer from '../applications_index/applications_index_container';


class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.loggedIn){
      if(this.props.admin){
        return(
          <div>
            <ApplicationsIndexContainer/>
          </div>
        );
      }else{
        return(
          <div>
            <ApplicationFormContainer/>
          </div>
        );
      }
    }else{
      return (
        <div>
          Please Sign Up or Sign In to create an application
        </div>
      );
    }
  }
}

export default LandingPage;