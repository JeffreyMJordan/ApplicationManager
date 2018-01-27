import React from "react";
import {Link} from "react-router-dom"


class ApplicationForm extends React.Component{
  constructor(props){
    super(props);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.setInitialState();
  }

  componentDidMount(){
    this.props.showApplicationByUserId(this.props.userId);
  }

  handleChange(type){
    
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  setInitialState(){
    if (!this.props.currentApplication){
      return {
        first_name: "",
        last_name: "",
        email: "",
        zip: "",
        user_id: this.props.userId
      }
    }else{
      return {
        first_name: this.props.currentApplication.first_name,
        last_name: this.props.currentApplication.last_name,
        email: this.props.currentApplication.email,
        zip: this.props.currentApplication.zip,
        user_id: this.props.userId
      };
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.update){
      this.props.updateApplication(this.state);
    }else{
      this.props.createApplication(this.state);
    }
  }

  render(){
    let buttonText = this.props.currentApplication? "Update Application" : "Create Application";
    let linkToTest = this.props.currentApplication? <Link to={`${this.props.currentApplication.id}/test`}>Next Steps: coding test</Link> : <div></div>;
    return(
      <div className="application-form">
        <form onSubmit={this.handleSubmit} action=""> 
          First Name 
          <input type="text" 
          onChange={this.handleChange('first_name')}
          value={this.state.first_name}/>


          Last Name 
          <input type="text" 
          onChange={this.handleChange('last_name')}
          value={this.state.last_name}/>

          Email 
          <input type="text" 
          onChange={this.handleChange('email')}
          value={this.state.email}/>

          Zip 
          <input type="text" 
          onChange={this.handleChange('zip')}
          value={this.state.zip}/>

          <input type="submit" value={buttonText}/>
        </form>
        {linkToTest}
      </div>
    );
  }


}

export default ApplicationForm;